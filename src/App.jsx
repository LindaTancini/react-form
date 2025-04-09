import { useState } from "react";

function App() {
  // LISTA DEGLI ARTICOLI
  const [articles, setArticles] = useState([
    "Manga",
    "Action Figure",
    "ArtBook",
    "Giocattoli per Gatto",
  ]);
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
  //CREO FUNZIONE PER ELIMINARE UN ARTICOLO
  function deleteArticles(indexDelete) {
    const newArrayArticles = articles.filter(
      (article, index) => indexDelete !== index
    );
    setArticles(newArrayArticles);
  }

  return (
    <>
      <div className="bg-pastel-pink p-2 text-white min-vh-100">
        <div className="container py-4 max-w-md mx-auto">
          <h1 className="text-center mb-4 text-pastel-green">
            Lista di Articoli{" "}
          </h1>
          <ul className="list-group mb-4">
            {/* PER OGNI ARTICOLO CHE AGGIUNGO O E' GIA' PRESENTE, LO INSERISCO IN UNA LISTA*/}
            {articles.map((article, index) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={index}
              >
                <h4>{article}</h4>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => deleteArticles(index)}
                >
                  <i className="fa-solid fa-heart-crack"></i> Elimina questo
                  articolo
                </button>
              </li>
            ))}
          </ul>
          {/*CONTROLLO L'EVENTO DI INVIO DEL FORM*/}
          <form className="d-flex gap-2" onSubmit={addNewArticles}>
            <input
              className="form-control"
              type="text"
              value={newArticles}
              //PRENDIAMO IL VALORE E LO INSERIAMO
              onChange={(event) => setNewArticles(event.target.value)}
            />
            <button className="btn btn-sm btn-pastel-green">
              <i className="fa-solid fa-heart"></i> Aggiungi Articolo
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
