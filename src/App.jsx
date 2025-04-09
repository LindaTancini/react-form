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
    // CON METODO SPREAD CLONO IL MIO ARRAY
    const updateArticle = [...articles, newArticles];
    //CON SET AGGIUNGIAMO IL VALORE AGGIUNTO IN PAGINA
    setArticles(updateArticle);
    //UNA VOLTA CHE AGGIUNGO UN ARTICOLO, SVUOTO L'INPUT
    setNewArticles("");
  };

  return (
    <>
      <div>
        <h1>Lista di Articoli </h1>
        <ul>
          {/* PER OGNI ARTICOLO CHE AGGIUNGO O E' GIA' PRESENTE, LO INSERISCO IN UNA LISTA*/}
          {articles.map((article, index) => (
            <li key={index}>{article}</li>
          ))}
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
