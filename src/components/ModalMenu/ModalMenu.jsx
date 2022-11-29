import React from "react";
import "./ModalMenu.css";
import HeaderLinks from "../HeaderLinks/HeaderLinks";

const ModalMenu = ({ isModalOpen, closeModal }) => {
  return (
    <div className={`modal-menu ${isModalOpen && "modal-menu_opened"}`}>
      {isModalOpen && (
        <nav className="modal-menu__container">
          <button
            aria-label="закрыть"
            className="modal-menu__close-btn"
            onClick={closeModal}
          />
          <HeaderLinks isModalOpen={isModalOpen} closeModal={closeModal} />
        </nav>
      )}
    </div>
  );
};

export default ModalMenu;
