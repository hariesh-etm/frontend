import React, { useState, useEffect } from "react";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { SubmissionForm } from "../components/SubmissionForm";
import { Toast } from "../components/Toast";
import axios from "axios";

export default function Home() {
  const [paid, setPaid] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("success") === "true") {
      setPaid(true);
      setShowToast(true);
      window.history.replaceState({}, document.title, "/");
    }
  }, []);

  const goPro = async () => {
    try {
      const res = await axios.post("/api/stripe", { priceId: "price_1S38f80dleg85x39s5zTN9BX" });
      window.location.href = res.data.url;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {showToast && <Toast message="✅ Thank you! Your profile is now live." onClose={() => setShowToast(false)} />}
      <Hero goPro={goPro} />
      <SubmissionForm paid={paid} />
      <Footer />
    </>
  );
}
