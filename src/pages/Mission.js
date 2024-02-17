import React from "react";
import "./mission.scss";
import { useEffect } from "react";

export default function Mission() {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <main>
        <h2>Un site internet, pourquoi ?</h2>
      <div className="grid-container-mission">
      <div className="box-image box-image-mission">
        <img alt="image bible" src={require("../utils/vue_temple_orgue.jpg")} />
      </div>
    
      <div className="box-info">
        <p>
          Les médias numériques (par opposition aux médias traditionnels, tels
          que la télévision, la radio et la presse écrite) jouent un rôle
          important dans notre société. Ils sont utilisés les entreprises, les
          institutions, les commerces, les associations, les particuliers, etc.
          pour lancer des nouveaux produits, créer des campagnes publicitaires,
          communiquer avec leurs clients ou leurs administrés… Pourquoi ? Parce
          que les médias numériques leur ouvrent de nombreuses possibilités. Les
          sites Web, qui sont un type de média numérique, offrent notamment les
          avantages suivants :
        </p>
      </div>

      <div className="box-info-bordered">
        <ul>
          <li>Ils peuvent aider à se développer.</li>
          <li>Ils encouragent l'interaction sociale.</li>
          <li>Ils peuvent générer du trafic et augmenter les ventes.</li>
          <li>Ils peuvent promouvoir la notoriété de la marque.</li>
        </ul>
      </div>
      <div className="box-image box-image-mission">

        <img alt="image bible" src={require("../utils/photo_temple_croix.jpg")} />
      </div>
      <div className="box-image box-image-mission">
        <img alt="image bible" src={require("../utils/vue_temple_orgue.jpg")} />
      </div>
      <div className="box-info">
        <p>
          Un site Internet est donc un outil puissant qui peut être utilisé pour
          atteindre un large public, au-delà de sa communauté, à toute heure et
          en tout lieu. Il offre de nombreuses opportunités, comme :
        </p>
      </div>
      <div className="box-info-bordered">
        <ul>
          <li>La possibilité de lancer de nouveaux produits et services.</li>
          <li>
            La possibilité de créer des campagnes d’information ou de promotion
            efficaces.
          </li>
          <li>
            La possibilité de communiquer avec les clients de manière
            personnalisée.
          </li>
        </ul>
      </div>

      <div className="box-image box-image-mission">
        <img alt="vitrail" src={require("../utils/vue_vitrail.jpg")} />
      </div>
      <div className="box-image box-image-mission">
        <img alt="affiche expo" src={require("../utils/photo_affiche.jpg")} />
      </div>
      <div className="box-info">
        <p>
          Finalement, la création d’un site Web est un investissement
          raisonnable pour un résultat rentable. Il donne la possibilité de se
          connecter à son public cible et de développer son activité. Pourquoi
          n’en serait-il pas de même en Eglise ?
        </p>
      </div>
      
    </div>
    <div>
               {/* <div className="drop" onClick={handleOpen}>Div</div> */}
                <div className="drop-icon" onClick={handleOpen}><button className="button">Mission +</button></div>
                {open ? (
                  <div>
                  {/* <h4 className="spray">Spray</h4> */}
                  <p>Un site internet pour votre Eglise, pour quoi faire ?
                  Un site internet de paroisse peut servir à plusieurs fins importantes, contribuant à renforcer la
                  communauté et à faciliter la communication. Voici quelques-unes des utilisations potentielles d&#39;un
                  site Web pour une Eglise locale :</p>
                  <ul className="box-info box-info-mission-sub">
                <li>1. Information
                  Le site peut fournir des détails sur les horaires et lieux des cultes, des différents groupes (catéchèse,
                  étude biblique, chorale, œcuménisme, etc.), des événements à venir (fêtes, concerts, etc.) et bien
                  d’autres choses. Cela permet aux membres de la communauté et aux visiteurs de rester informés.</li>
                  <li>2. Communication
                  Un site Web peut servir de plateforme pour communiquer des annonces importantes (ex. : un
                  service funèbre), des nouvelles de l&#39;Eglise, des changements d&#39;horaires, etc. Cela peut être
                  particulièrement utile pour les membres qui ne peuvent pas assister régulièrement aux réunions ou
                  pour les personnes nouvelles dans la communauté.</li>
                  <li> Ressources
                  Le site peut proposer des ressources spirituelles telles que des prédications enregistrées ou écrites,
                  des éléments de liturgie (prières, confessions de foi, etc.), des études bibliques, des articles... Cela
                  peut être utiles pour les membres qui souhaitent approfondir leur foi ou se ressourcer.</li>
                  <li>4. Contact
                  Donner des informations (contact, responsable de groupe, coordonnées) au visiteur, c’est faciliter la
                  communication entre les membres de l&#39;Eglise et l’extérieur. Les personnes peuvent dès lors poser
                  des questions (culte, baptême, mariage, service funèbre) ou exprimer leur intérêt pour votre Eglise.</li> 
                  <li>5. Évangélisation
                  Un site internet de paroisse est un outil formidable outil d&#39;évangélisation dès lors qu’il fournit des
                  informations sur la foi chrétienne, les conviction de l&#39;Eglise, et invite les personnes à participer à la
                  vie d’Eglise. Ne dit-il pas finalement comme Jésus à ses contemporains : « Venez et voyez » ? (Jn
                  1,39)</li>
                  <li>6. Collecte
                  Pour soutenir les activités de l&#39;Eglise locale, le site peut inclure des fonctionnalités pour les dons en
                  ligne. Cela permet à ceux qui le souhaitent de contribuer financièrement et de manière sécurisée…
                  en quelques clics.</li>
                  <li>7. Gestion du fichier paroissial
                  Un site Web peut également inclure des fonctionnalités de gestion des membres, permettant aux
                  responsables de l&#39;Eglise (Conseil presbytéral, conseil paroissial, pasteur, prêtre…) de suivre les
                  adhésions, de gérer les listes de diffusion, etc.</li>
                  <li>8. Éducation et formation
                  Le site peut être utilisé pour partager des informations éducatives sur la foi, des formations, des
                  éléments de l&#39;histoire de l&#39;Eglise, des photos, des cartes, des vidéos, des musiques, etc.</li>
                  <li>9. Interaction sociale
                  Les fonctionnalités de médias sociaux sur le site peuvent faciliter l&#39;interaction et le partage en ligne
                  entre les membres de la communauté.</li>
                  <li>10. Diffuser le culte
                  Il y a une véritable demande pour la diffusion (style visio-conférence) du culte en direct, en replay
                  (vidéo à la demande), en podcast (audio numérique). Pensez aux paroissiens qui ne peuvent plus se
                  déplacer au temple ou à l’église. Si cela nécessite d’investir dans du matériel audio-visuel, la
                  meilleure porte d’entrée est déjà d’avoir votre site d’Eglise.</li>
                  </ul>
                  
                  <p>En résumé, un site internet pour une paroisse peut être un outil polyvalent qui soutient la
                  communauté de diverses manières, allant de la communication à l&#39;évangélisation en passant par la
                  collecte de fonds et par la dynamisation de la vie d’Eglise.</p></div>
                  ) : null}
                  </div>
                
    </main>
  );
}
