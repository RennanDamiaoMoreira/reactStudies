import "./style.css";
import api from "../../services/api";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Film() {
    const { id } = useParams();
    const [film, setFilm] = useState();
    const [loading, setLoading] = useState(true);
    const history = useHistory();


    useEffect(() => {
        async function loadFilm() {
            const response = await api.get(`/r-api/?api=filmes/${id}`);
            if (response.status === 200) {
                if (response.data.length=== 0){
                    history.replace('/');
                }

                setFilm(response.data);
            } else {
                alert("deu  erro aqui zé");
            }
            setLoading(false);
        }
        loadFilm();

        return ()=>{
            console.log("conteudo desmontado ")
        }
    }, [ history, id ]);

    if (loading) {
        return (
            <div>
                <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="film-info">
                <h1>{film.nome}</h1>
                <img src={film.foto} />

                <h3>Sinopse</h3>
                <p>{film.sinopse}</p>

                <div className="buttons">
                    <button onClick={() =>{}} > Salvar</button>
                    <button> <a target="_blank" href={`https://www.youtube.com/results?search_query=${film.nome} Trailer`} >Trailer</a></button>
                </div>

            </div>
        );
    }
}
