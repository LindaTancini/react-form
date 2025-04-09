import { useState } from "react";

function App() {
  // LISTA DEGLI ARTICOLI
  const [articles, setArticles] = useState(["Manga"]);
  // AGGIUNGO UN NUOVO ARTICOLO
  const [newArticles, setNewArticles] = useState("");
  console.log(articles);

  // AGGIUNGO PREVENT DEFAULT PER NON FAR RICARICARE LA PAGINA
  const addNewArticles = (event) => {
    event.preventDefault();
    //CON PUSH AGGIUNGO I NUOVI ARTICOLI
    articles.push(newArticles);
    console.log(newArticles);
  };

  return (
    <>
      <div>
        <h1>Lista di Articoli </h1>
        <ul>
          <li>{articles}</li>
        </ul>
        {/*CONTROLLO L'EVENTO DI INVIO DEL FORM*/}
        <form onSubmit={addNewArticles}>
          <input
            type="text"
            value={newArticles}
            //PRENDIAMO IL VALORE E LO INSERIAMO
            onChange={(event) => setNewArticles(event.target.value)}
          />
          <button>Aggiungi Articolo</button>
        </form>
      </div>
    </>
  );
}

export default App;
