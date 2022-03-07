import "./style.css";
import api from "../../services/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function Film() {
  const { id } = useParams();
  const [film, setFilm] = useState();

  useEffect(() => {
    async function loadFilm() {
      const response = await api.get(`/r-api/?api=filmes/${id}`);
      if (response.status === 200) {
        setFilm(response.data);
      } else {
        alert("deu  erro aqui zé");
      }
    }
    loadFilm();
  }, []);
  return (
    <div>
      <h1>{JSON.stringify(film)}</h1>
    </div>
  );
}
