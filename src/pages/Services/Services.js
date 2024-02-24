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
      <p>
        Avant tout, sachez que nous nous occupons de stocker votre site internet
        sur nos serveurs pour un forfait de 10€ par années pour un site
        classique et ce pour des contraintes techniques notamment et plus de
        facilité de gestion de notre côté.
      </p>
      <p>
        Indépendamment vous avez la possibilité de souscrire à un forfait de 25€
        offrant 5 modifications mineures, changement de photos, de titres et de
        phrases par exemple.
      </p>
      <h2 className="pack-title">Pack 1 Site type "vitrine"</h2>
   
      <ul>
        <li>5 Pages, par exemple une page accueil et 4 autres pages.</li>
        <li>
          10 photos, avec possibilité de faire un carrousel(images qui défilent
          pour 3 d'entre-elles) sur une des pages.
        </li>
        <li></li>
      </ul>
      <h3>Tarif: 500€</h3>
      <h2 className="pack-title">Pack 2 Refonte d'un site vitrine existant</h2>
<p></p>
      <h3>Tarif: 600€</h3>
      <h2 className="pack-title">Solution personnalisée ou avec fonctionnalités avancées</h2>
      <h3>Sur devis</h3>
    </main>
  );
}
