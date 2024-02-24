import React from "react";

// import "../../pages/Methodologie/methodologie.scss";
import "./services.scss";

import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Service() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <main>
      <h2>Nos services</h2>
      <div>
        {" "}
        Ekklêsia Web, à votre service nous « codons » entièrement votre site, de
        A à Z. La prestation est sur mesure et professionnelle. « Un peu plus de
        jaune, un peu moins grand, un peu plus haut… » Nous nous conformons à
        vos exigences pour que votre site Web soit vraiment celui dont vous avez
        rêvé : un site esthétique et multiplateforme : une version écran
        ordinateur, une version tablette, et surtout une version smartphone, de
        plus en plus utilisée de nos jours.
      </div>
      <div className="flex-extend-container">
        <h2 className="title-extend">Notre expertise pour vous</h2>

        <button onClick={handleOpen} className="button button-extend">
          En savoir +
        </button>
        {open ? (
          <div className="extend-content">
            {/* <h2 className="title-extend">Notre expertise pour vous</h2> */}
            <div>
              Un développeur web est un professionnel de la création et de la
              maintenance de sites Web. C’est un expert qui utilise divers
              langages de programmation, des outils et des technologies pour
              concevoir, développer et optimiser des applications Web. Son
              travail consiste à transformer vos idées, vos spécifications et,
              peut-être aussi, vos maquettes en sites internet fonctionnels,
              ergonomiques et attractifs.
            </div>
            <NavLink to="../realisations">
              <button className="button">Nos réalisations</button>
            </NavLink>
          </div>
        ) : null}
      </div>
      <h2 className="pack-high-title">Nos offres</h2>

      <p className="forfaits">
        <span className="bold-text">
          {" "}
          Avant tout, sachez que nous nous occupons de stocker votre site
          internet sur nos serveurs pour un forfait de 30€ par année pour un
          site classique et ce pour des contraintes techniques notamment et plus
          de facilité de gestion de notre côté.
        </span>
      </p>
      <p className="forfaits">
        <span className="bold-text">
          Indépendamment vous avez la possibilité de souscrire à un forfait "Sérénité EW"
          mensuel de 25€ offrant 5 modifications mineures par mois, changement
          de photos, de titres et de phrases par exemple.
        </span>
      </p>
      <p>
        Pour des modifications plus importantes n'hésitez pas à nous contacter.
      </p>
      <NavLink to="../contact">
        <button className="button">Contact</button>
      </NavLink>
      <p>
        Au préalable, dans tout les cas de figure, une prise de contact
        personnalisée vous sera proposée lors de laquelle nous évoquerons en
        détails votre projet.
      </p>
      <h2 className="pack-title">Pack 1 Site type "vitrine"</h2>

      <ul className="pack-list">
        <li>
          Accompagnement dans le choix de votre nom de domaine qui reste à votre
          charge, quelques euros par ans suivant l'extension choisie.
        </li>
        <li>5 Pages, par exemple une page accueil et 4 autres pages.</li>
        <li>Intégration de votre logo.</li>
        <li>
          Création d'un menu avec des ancres compatible en responsive (mobile).
        </li>
        <li>
          10 photos, avec possibilité de faire un carrousel(images qui défilent
          pour 3 d'entre-elles) sur une des pages.
        </li>
        <li>
          Un site compatible sur tous les écrans desktop, mobile, tablette.
        </li>
        <li>
          Mise en place du référencement naturel SEO pour que votre site
          apparaisse sur les moteurs de recherche.
        </li>
        <li>
          Et bien évidemment, Sécurisation complète du site pour minimiser les
          risques de se faire pirater et augmenter la confiance des visiteurs.
        </li>
      </ul>
      <h3 className="pack-title-price">Tarif: 500€</h3>
      <h2 className="pack-title">Pack 2 Refonte d'un site vitrine existant</h2>
        Les prestations du pack 1 avec reprise du contenu existan:
        <ul className="pack-list">
          <li>vos photos</li>
          <li>vos textes</li>
          <li>votre logo si vous en avez un</li>
        </ul>
      <h3 className="pack-title-price">Tarif: 600€</h3>
      <h2 className="pack-title">Pack Identité visuelle</h2>
      <p>Une identité visuelle est l’ensemble des éléments graphiques qui reflètent votre Église</p>
      <p>Elle valorise et met en avant votre paroisse</p>
        <ul className="pack-list">
          <li>une palette de couleurs imaginée pour votre Église</li>
          <li>des polices d’écritures en accord avec l'image de celle-ci </li>
          <li>votre logo sur mesure</li>
          <li>une compatibilité de celui-ci sur tous les supports</li>
          <li>une favicon sur mesure</li>
        </ul>
        <div className="box-image-identite-container">

        <div className="box-image-identite-sub-container">
          <img
            alt="vue orgue"
            src={require("../../utils/Identité-visuelle-EPU-Crestois-2023-mini.jpg")}
          />
        </div>
     </div>
      <h3 className="pack-title-price">Tarif: 550€</h3>
      <h2 className="pack-title">
        Solution personnalisée ou avec fonctionnalités avancées
      </h2>
      <h3 className="pack-title-price">Sur devis</h3>
      <div className="button-group">
        <NavLink to="../contact">
          <button className="button">Contact</button>
        </NavLink>
      </div>
    </main>
  );
}
