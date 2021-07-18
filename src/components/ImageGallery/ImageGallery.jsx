import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem";
import { GalleryList } from "./ImageGallery.styles";

function ImageGallery({ images, modalImage }) {
  return (
    <GalleryList>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            imageSrc={webformatURL}
            tags={tags}
            onClick={() => modalImage(largeImageURL)}
          />
        );
      })}
    </GalleryList>
  );
}

ImageGallery.propTypes = {
  modalImage: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};

export default ImageGallery;
