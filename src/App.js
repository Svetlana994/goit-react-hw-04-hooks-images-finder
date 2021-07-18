import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageGallery from "./components/ImageGallery";
import Searchbar from "./components/Searchbar";
import Modal from "./components/Modal";
import Button from "./components/Button";
import LoaderComponent from "./components/Loader";
import fetchImages from "./services/ApiService";
import { Container } from "./App.styles";

function App() {
  const [pictureQuery, setPictureQuery] = useState("");
  const [images, setImages] = useState([]);
  const [pictureModal, setPictureModal] = useState("");
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const handleFormSubmit = (searchQuery) => {
    if (searchQuery === pictureQuery) {
      return;
    }
    setPictureQuery("");
    setImages([]);
    setPage(1);
    setPictureQuery(searchQuery);
  };

  useEffect(() => {
    if (!pictureQuery) {
      return;
    }
    setStatus("pending");

    async function fetchPictures() {
      try {
        const images = await fetchImages(pictureQuery, page);
        setImages((prevState) => [...prevState, ...images]);
        setStatus("resolved");

        if (images.length === 0) {
          throw new Error();
        }

        if (page > 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }
      } catch (error) {
        setError(error);
        setStatus("rejected");
        toast.error("Enter a valid search query");
      }
    }
    fetchPictures();
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [page, pictureQuery]);

  const selectModalImage = (picture) => setPictureModal(picture);

  const onModalClick = (e) => {
    if (e.currentTarget === e.target) {
      setPictureModal(null);
    }
  };

  const handleKeydown = (e) => {
    if (e.code === "Escape") {
      setPictureModal(null);
    }
  };

  const loadMoreImages = () => setPage((prevPage) => prevPage + 1);

  const pending = status === "pending";

  const resolved = status === "resolved";

  return (
    <Container>
      <Searchbar onSubmit={handleFormSubmit} />

      {pending && <LoaderComponent />}
      <ImageGallery images={images} modalImage={selectModalImage} />

      {resolved && <Button onLoad={loadMoreImages} />}
      {pictureModal && (
        <Modal pictureModal={pictureModal} onClick={onModalClick} />
      )}
      <ToastContainer autoClose={2000} />
    </Container>
  );
}

export default App;
