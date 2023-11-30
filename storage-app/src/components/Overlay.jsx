import React from 'react';

function Overlay({ isOpen, onClose }) {
  return isOpen ? (
    <div
      className="fixed inset-0 bg-black opacity-50 z-40"
      onClick={onClose}
    ></div>
  ) : null;
}

export default Overlay;