import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-200 rounded-lg relative">
        <button
          onClick={onClose}
          className="absolute hover:bg-red px-2 py-1 -red top-2 right-2 text-gray-500 hover:text-gray-700 hover:bg-red-600 cursor-pointer z-50 text-xl"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
