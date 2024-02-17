import React from "react"
import { NavLink } from "react-router-dom";
// import { Button } from "@mui/material";
import "./methodologie.scss"
import { useEffect } from "react";


const Methodologie = () => {


  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };





  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <main>
      <h2>Méthodologie</h2>


<div>
               {/* <div className="drop" onClick={handleOpen}>Div</div> */}
                <div className="drop-icon" onClick={handleOpen}> + </div>
                {open ? (
                  <h4 className="spray">Spray</h4>
                  ) : null}
                  </div>
                  







      {/* <div class="box-info"> */}
      {/* <h3>Création du site ou refonte d’un site existant</h3>
      <ul>
        <li>
          Nous procéderons au choix et la réservation d’un nom de domaine
          (adresse) selon la disponibilité et nous apporterons une réflexion
          sur la pertinence de ce choix (la réservation de nom de domaine est
          à votre charge mais elle représente un coup très faible quelques
          euros par an). Une aide peut vous être apportée dans cette
          procédure.
        </li>

        <li>
          Nous vous proposerons une charte graphique et nous discuterons de
          vos différentes polices de caractère choisies , les couleurs
          choisies, en relation avec votre logo, votre géographie et
          l’histoire de votre paroisse, une expertise vous sera donnée sur
          tous ces sujets.
        </li>
        <li>
          Choix de la structure des pages du sites notamment du menu et
          disposition des différents éléments suivant les tailles
          d’écran :bureau, tablette , smartphone
        </li>
        <li>Intégration des contenus textes et des photos.</li>
        <li>
          Livraison du site avec audits des performances du site internet
          grâce à des outils de développement web.
        </li>
        <li>Mise en ligne du site sur nos serveurs.</li>
      </ul> */}
      {/* </div> */}
      A reformuler
Pour créer un site internet d&#39;une Eglise, un bon développeur Web doit suffire. Si, en plus, il est
chrétien et engagé personnellement dans son Eglise, cela lui permet d’être plus à même de saisir les
enjeux et les besoins de votre paroisse, son organisation et son fonctionnement. Efficacité et gain de
temps pour tous !
<ul>
Pour plusieurs raisons :
<li>- Compréhension de la théologie et de la culture chrétiennes : Un développeur chrétien
comprend les valeurs et les croyances fondamentales du christianisme. Cela lui permet de
créer un site Web qui est à la fois informatif et pertinent pour le public cible de l&#39;Eglise.</li>
<li>- Sensibilisation aux besoins des Eglises : Un développeur chrétien comprend les besoins
spécifiques des Eglises locales. Cela lui permet de créer un site Web qui est fonctionnel et
facile à utiliser.</li>
<li>- Expérience dans la création de sites Web chrétiens : nous avons l’avantage d’avoir déjà créé
des sites Web pour des Eglises. Cela nous donne une crédibilité et des compétences
précieuses qui peuvent être utilisées pour créer un site Web de qualité pour votre Eglise.</li>
</ul>
<div className="button-group">
<NavLink to='../Mission'><button className="button">Mission</button></NavLink>

        <div className="box-image-methodologie">
          {/* <!-- <img src="./parroissiens.webp" alt="paroissiens" /> --> */}
          {/* <img
            src="./paroissiens.webp"
            srcSet="parroissiens-mini.webp 320w, paroissiens.webp 640w"
            alt="photo paroissiens"
          /> */}
          <img alt="image bible" src={require("../utils/methodo.jpg")} />

        </div>
        <NavLink to='../contact'><button className="button">Contact</button></NavLink>

        </div>
    </main>

  )



}


export default Methodologie;
