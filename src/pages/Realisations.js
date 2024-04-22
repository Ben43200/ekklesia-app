import React from "react";
import "../pages/Methodologie/methodologie.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
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
      <Link to="https://epu-crestois.fr/" target="_blank"  rel="noreferrer">Cliquez ici pour accéder au site</Link>
      {/* <div className="realisation-title"> <h3>Version bureau</h3>
      
      </div> */}
         <div className="realisation-title">
      <h3 className="mobile-title-visible">Version bureau</h3>
      <h3 className="mobile-title-masked">Version mobile</h3> 
      </div>
      <div className="box-realisation">
      <img className="epu-crestois-desktop" src={epucrestoisdesktop} alt="crestois-desktop" />
      <h3 className="desktop-title-masked">Version mobile</h3> 
      <img className="epu-crestois-mobile" src={epucrestoismobile} alt="crestois-mobile" />
      </div>
      <ContactForm />
    </main>
  );
}
