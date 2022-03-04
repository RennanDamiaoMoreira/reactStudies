import React, { useEffect, useState } from "react";
import "./style.css";
//https://sujeitoprogramador.com/rn-api/?api=posts
function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    function loadApi() {
      let url = "https://sujeitoprogramador.com/rn-api/?api=posts";
      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          setNutri(json);
        });
    }
    loadApi();
  });
  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>
      {nutri.map((element) => {
        return (
          <article key={element.id} className="post">
            <strong className="titulo">{element.title}</strong>
            <img src={element.capa} alt={element.titulo} className="capa"></img>
            <p className="subtitulo">{element.subtitulo}</p>
          </article>
        );
      })}
    </div>
  );
}

export default App;
