import React from "react";
import "../pages/Methodologie/methodologie.scss";
import { useEffect } from "react";
import ContactForm from "../components/ContactForm/ContactForm";

export default function Realisations() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <h2>Nos Réalisations</h2>
      <p>Site de la paroisse de crest</p>
      <ContactForm />
    </main>
  );
}
