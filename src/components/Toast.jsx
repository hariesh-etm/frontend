import React from "react";

export const Toast = ({ message, onClose }) => (
  <div className="fixed bottom-5 right-5 bg-teal-500 px-6 py-3 rounded-lg shadow-md animate-fadeIn">
    {message}
    <button className="ml-4 font-bold" onClick={onClose}>✕</button>
  </div>
);
