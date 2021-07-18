import axios from "axios";

const API_KEY = "21694514-038331012d9ce6d0d84cba359";
axios.defaults.baseURL = "https://pixabay.com/api";

async function fetchImages(pictureQuery, page) {
  const response = await axios.get(
    `/?q=${pictureQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  const promises = response.data.hits;
  return promises;
}

export default fetchImages;
