import PropTypes from "prop-types";
import { Overlay, ModalWindow } from "./Modal.styles";

function Modal({ onClick, pictureModal }) {
  return (
    <Overlay onClick={onClick}>
      <ModalWindow>
        <img src={pictureModal} alt="" />
      </ModalWindow>
    </Overlay>
  );
}

Modal.propTypes = {
  pictureModal: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Modal;
