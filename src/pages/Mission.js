import React from "react";
import "./mission.scss"

export default function Mission() {
  return (
    <main>
      <div className="box-image">
        <img
          src="./bible.webp"
          srcset="bible-mini.webp 320w, bible.webp 640w"
          alt="photo bible"
        />
      </div>
      <h2>Un site internet, pourquoi ?</h2>
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
      <div className="box-image">
        <img
          src="./bible.webp"
          srcset="bible-mini.webp 320w, bible.webp 640w"
          alt="photo bible"
        />
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

      <div className="box-image">
        <img
          src="./bible.webp"
          srcset="bible-mini.webp 320w, bible.webp 640w"
          alt="photo bible"
        />
      </div>
      <div className="box-info">
        <p>
          Finalement, la création d’un site Web est un investissement
          raisonnable pour un résultat rentable. Il donne la possibilité de se
          connecter à son public cible et de développer son activité. Pourquoi
          n’en serait-il pas de même en Eglise ?
        </p>
      </div>
    </main>
  );
}
