/* eslint-disable react/prop-types */
import './Modal.css';
export const Modal = (props) => {
  return (
    <>
      <div className="backdrop" onClick={props.onClose} />
      <dialog open className="modal">
        {props.children}
      </dialog>
    </>
  );
};
