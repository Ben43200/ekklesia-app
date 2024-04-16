import React from "react";
import "../pages/Methodologie/methodologie.scss";
import { useEffect } from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import epucrestoisdesktop from "../utils/epu-crestois-desktop-mini.png"
import epucrestoismobile from "../utils/epu-crestois-mobile.png"


export default function Realisations() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <h2>Nos Réalisations</h2>
      <p>Site de la paroisse de crest</p>
      <h3>Version bureau</h3>
      <div className="box-realisation">
      
      
      <img className="epu-crestois-desktop" src={epucrestoisdesktop} alt="crestois-desktop" />
      <h3>Version mobile</h3> 
      <img className="epu-crestois-mobile" src={epucrestoismobile} alt="crestois-mobile" />
     
      </div>
      <ContactForm />
    </main>
  );
}
