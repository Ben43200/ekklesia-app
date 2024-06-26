import React from "react";
import "./home.scss";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
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
          <img
            alt="vue sortie temple"
            src={require("../../utils/vue_sortie_temple.jpg")}
            fetchpriority="high"
          />
        </div>
        <div className="box-info">
          <h3>Un site internet, pourquoi ?</h3>
          <p>
            Les besoins de votre paroisse nécessitent une visibilité médiatique
            pour garder le lien avec vos membres dans et en dehors des temps
            d’Églises.Nous sommes convaincus que la création d’un site ou la
            refonte de ce dernier ( si vous en avez déjà un) sera un atout
            fondamental pour dynamiser votre paroisse
          </p>
          <NavLink to="../Mission">
            <div className="flex-extend-container">
              <button className="button">Mission</button>
            </div>
          </NavLink>
        </div>
        <div className="box-image">
          <img
            alt="vue expo"
            src={require("../../utils/vue_expo_grd_format.jpg")}
          />
        </div>
        <div className="box-info">
          <h3>Que proposons nous ?</h3>
          <p>
            Vous souhaitez avoir un site internet à l’image de votre paroisse et
            qu'il reflète son histoire sa géographie ses valeurs et la vie de sa
            communauté. Nous travaillons avec les paroisses de toutes tailles,
            nous vous accompagnerons tout au long de votre projet.
          </p>
          <NavLink to="../services">
            <div className="flex-extend-container">
              <button className="button">Services</button>
            </div>
          </NavLink>
        </div>

        <div className="box-image">
          <img
            alt="vue console etage"
            src={require("../../utils/vue_console_etage.jpg")}
          />
        </div>
        <div className="box-info">
          <h3>Une prestation Sur mesure</h3>
          <p>
            Nous codons votre site de A à Z , nous n’utilisons aucun système
            tels que Wordpress ou Elementor (service payant) facilitant la
            création de sites web, ni l’intelligence artificielle (no code)
            générant automatiquement des sites web, mais n’offrant pas toutes
            les possibilités de créations et diminuant les chances d’optimiser
            votre site internet. Nous travaillons à ce que votre site internet
            ait une version écran ordinateur, une version tablette, et surtout
            une version smartphone, de plus en plus utilisée de nos jours.
          </p>
          <NavLink to="../methodologie">
            <div className="flex-extend-container">
              <button className="button">Methodologie</button>
            </div>
          </NavLink>
        </div>
        <div className="box-image">
          <img
            alt="vue vitrail etage"
            src={require("../../utils/vue_vitrail_etage.jpg")}
          />
        </div>
        <div className="box-info">
          <h3>Qui sommes-nous ?</h3>
          <p>
            Ekklêsia Web est né d’une idée entre un ancien pasteur et un
            développeur web venant de lancer sa Micro entreprise tous deux
            membres de l’église protestante unie du crestois(Drôme). Nous avons
            pour vocation de vous aider à dynamiser votre église locale à
            travers ce média
          </p>
          <NavLink to="../contact">
            <div className="flex-extend-container">
              <button className="button">Contact</button>
            </div>
          </NavLink>
        </div>
      </div>
    </main>
  );
}
