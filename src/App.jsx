import { useState } from "react";

function App() {
  // LISTA DEGLI ARTICOLI
  const [articles, setArticles] = useState("Manga");
  console.log(articles);
  return (
    <>
      <div>
        <h1>Lista di Articoli </h1>
        <ul>
          <li>{articles}</li>
        </ul>
      </div>
    </>
  );
}

export default App;
