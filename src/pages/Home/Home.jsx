// import "./Home.scss";
// import { getLogements } from "../../services/dataManager";
// import background from "../../images/background-banner.png";
// import React, { useEffect, useState } from "react";
import React from "react";
// import Navbar from "../../components/Navbar";
import "./home.scss";
// import Footer from "../components/Footer";
// import background from "../../compress-background.webp";
// import BackToUp from "../../components/BackToUp/BackToUp";
// import Header from "../../components/Header";
// const imageSmall = "../../compress-image-small.jpg"
// const imageMedium = "../../compress-image-medium.jpg"
// const imageLarge = "../../compress-image-large.webp"
export default function Home() {
  return (
    // <Navbar />
    <main>
      {/* <h2>Création et refonte de site web</h2> */}

      <div className="box-info">
        <p>
          Bienvenue sur le site Ekklêsia Web. Nous accompagnons les Eglises
          locales dans leur croissance en permettant une plus grande visibilité
          sur Internet. A l’écoute des besoins spécifiques de chaque paroisse,
          nous proposons des sites Web clés en main, à prix serrés. Nous
          concevons également des solutions sur mesure et professionnelles,
          sécurisées et évolutives.
        </p>
      </div>

      <div className="grid-container">
        <div className="box-image">
          {/* <img
            src="../../utils/vue_sortie_temple.jpg"
            srcSet="bible-mini.webp 320w, bible.webp 640w"
            alt="photo bible"
          /> */}
          <img alt="image bible" src={require("../../utils/vue_sortie_temple.jpg")} />
        </div>
        <div className="box-info">
          <h3>Un site internet, pourquoi ?</h3>
          <p>
            Les besoins de votre paroisse nécessitent une visibilité médiatique
            pour garder le lien avec vos membres dans et en dehors des temps
            d’églises. Nous sommes convaincus que cette création ou une refonte
            de ce dernier sera un atout fondamental pour votre paroisse.
          </p>
          <a href="mission.html">Notre mission</a>
        </div>
        <div className="box-image">
          {/* <!-- <img src="./parroissiens.webp" alt="paroissiens" /> --> */}
          {/* <img
            src="./paroissiens.webp"
            srcSet="parroissiens-mini.webp 320w, paroissiens.webp 640w"
            alt="photo paroissiens"
          /> */}
          <img alt="image bible" src={require("../../utils/vue_expo_grd_format.jpg")} />

        </div>
        <div className="box-info">
          <h3>Que proposons nous ?</h3>
          <p>
            Vous souhaitez avoir un site internet à l’image de votre paroisse et
            le qui reflète son histoire sa géographie ses valeurs et la vie de
            sa communauté. Nous travaillons avec les paroisses de toutes
            tailles, nous vous accompagnerons tout au long de votre projet.
          </p>
          <a href="services.html">Découvrez nos services</a>
        </div>

        <div className="box-image">
          {/* <!-- <img src="./pasteur.webp" alt="pasteur" /> --> */}
          {/* <img
            src="./pasteur.webp"
            srcSet="pasteur-mini.webp 320w, pasteur.webp 640w"
            alt="photo pasteur"
          /> */}
          <img alt="image bible" src={require("../../utils/vue_console_etage.jpg")} />

        </div>
        <div className="box-info">
          <h3>Une prestation Sur mesure</h3>
          <p>
            Nous codons votre site de A à Z , nous n’utilisons aucun système
            tels que wordpress ou elementor (service payant) facilitant a
            création de sites web mais n’offrant pas toutes les possibilités de
            créations et diminuant les chances d’optimiser votre site internet.
            Nous travaillons à ce que votre site internet ait une version écran
            ordinateur, une version tablette, et surtout une version smartphone,
            de plus en plus utilisée de nos jours.
          </p>
          <a href="methodologie.html">Notre méthodologie</a>
        </div>
        <div className="box-image">
          {/* <!-- <img src="./homme-priant.webp" alt="homme-priant.jpg" /> --> */}
          {/* <img
            src="./homme-priant.webp"
            srcSet="homme-priant-mini.webp 320w, homme-priant.webp 640w"
            alt="photo homme priant"
          /> */}
          <img alt="image bible" src={require("../../utils/vue_vitrail_etage.jpg")} />

        </div>
        <div className="box-info">
          <h3>Qui nous sommes nous ?</h3>
          <p>
            {" "}
            Eukklêsia Web est né d’une idée entre un ancien pasteur et un
            développeur web venant de lancer sa micro entreprise tout deux
            paroissiens de la paroisse protestante unie du Crestois( Crest
            ,drôme). Nous avons pour vocation de dynamiser la vie des églises
            locales à travers ce médium.
          </p>
          <a href="#">Mieux nous connître</a>
        {/* <div className="box-image">
          {/* <!-- <img src="./homme-priant.webp" alt="homme-priant.jpg" /> --> */}
          {/* <img
            src="./homme-priant.webp"
            srcSet="homme-priant-mini.webp 320w, homme-priant.webp 640w"
            alt="photo homme priant"
          /> */}
          {/* <img alt="image bible" src={require("../../utils/vue_sortie_temple.jpg")} /> */}

        {/* </div>  */} 
        </div>
      </div>
    </main>
  );
}
