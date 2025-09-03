import React, { useState } from "react";
import { Toast } from "./Toast";

export const SubmissionForm = ({ paid }) => {
  const [input, setInput] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setInput("");
  };

  if (!paid) return null;

  return (
    <>
      {showToast && <Toast message="✅ Submission saved!" onClose={() => setShowToast(false)} />}
      <form onSubmit={handleSubmit} className="mt-10 max-w-md mx-auto flex flex-col gap-4">
        <label className="text-gray-700 font-semibold">Enter text or video URL:</label>
        <input
          type="text"
          className="border rounded-lg p-3"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Your entry"
          required
        />
        <button type="submit" className="bg-teal-500 text-white rounded-xl px-5 py-2 hover:bg-teal/90 transition">
          Submit Entry
        </button>
      </form>
    </>
  );
};
