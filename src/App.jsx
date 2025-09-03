import React, { useEffect, useState } from "react";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { SubmissionForm } from "./components/SubmissionForm";
import { Toast } from "./components/Toast";

export default function App() {
  const [paid, setPaid] = useState(false);
  const [showSignupToast, setShowSignupToast] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("success") === "true") {
      setPaid(true);
      setShowSignupToast(true);
      window.history.replaceState({}, document.title, "/"); // clean URL
    }
    setShowToast(false);
  }, []);

  return (
    <div>
      {showSignupToast && <Toast message="✅ Thank you! Your profile is now live." onClose={() => setShowSignupToast(false)} />}
      <Hero />
      <SubmissionForm paid={paid} />
      <Footer />
    </div>
  );
}
