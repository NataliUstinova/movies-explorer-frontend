import React, { useEffect } from "react";
import "./Popup.css";

const Popup = ({ isOpen, onClose, serverResponse }) => {
  function closeByEsc(e) {
    if (e.key === "Escape") {
      onClose();
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", closeByEsc);
    }
    return () => {
      document.removeEventListener("keydown", closeByEsc);
    };
  }, [isOpen]);

  function handleCloseByOverlay(e) {
    if (
      e.target === e.currentTarget ||
      e.target.classList.contains("popup__close")
    ) {
      onClose();
    }
  }
  return (
    <div
      className={`popup ${isOpen && "popup_opened"}`}
      onClick={handleCloseByOverlay}
    >
      <div className="popup__relative-container">
        <div className="popup__container">
          <p className="popup__text">{serverResponse}</p>
        </div>
        <button
          className="popup__close"
          type="button"
          aria-label="close"
        ></button>
      </div>
    </div>
  );
};

export default Popup;
