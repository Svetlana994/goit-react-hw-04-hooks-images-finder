import PropTypes from "prop-types";
import { GalleryItem, GalleryItemImage } from "./ImageGalleryItem.styles";

function ImageGalleryItem({ imageSrc, tags, onClick }) {
  return (
    <GalleryItem onClick={onClick}>
      <GalleryItemImage src={imageSrc} alt={tags} />
    </GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
