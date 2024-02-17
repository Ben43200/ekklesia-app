import React from "react"

import "./methodologie.scss"
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Service() {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <main>
      <h2>Nos services</h2>
     <div> Ekklêsia Web, à votre service
Nous n’utilisons aucun système tels que Wordpress ou Elementor (service payant) qui sont sensés
faciliter la conception de sites Web car ils n’offrent pas toutes les possibilités de création et
diminuent les chances d’optimiser votre site Internet.
Nous, nous « codons » entièrement votre site, de A à Z. La prestation est sur mesure et
professionnelle. « Un peu plus de jaune, un peu moins grand, un peu plus haut… » Nous nous
conformons à vos exigences pour que votre site Web soit vraiment celui dont vous avez rêvé : un site
esthétique et multiplateforme : une version écran ordinateur, une version tablette, et surtout une
version smartphone, de plus en plus utilisée de nos jours.</div>
<div className="flex-extend-container">
<button  onClick={handleOpen}className="button button-extend">En savoir +</button>
                {open ? (
                  <div  className="extend-content">
                  {/* <h4 className="spray">Spray</h4> */}
                  <h2 className="title-extend">Notre expertise pour vous</h2>
              
                  <div>
Un développeur web est un professionnel de la création et de la maintenance de sites Web. C’est un
expert qui utilise divers langages de programmation, des outils et des technologies pour concevoir,
développer et optimiser des applications Web. Son travail consiste à transformer vos idées, vos
spécifications et, peut-être aussi, vos maquettes en sites internet fonctionnels, ergonomiques et
attractifs.</div>
<NavLink to='../realisations'><button className="button">Nos réalisations</button></NavLink></div>
                  ) : null}
                  {/* </div> */}
                  </div>
      </main>
      )}
     