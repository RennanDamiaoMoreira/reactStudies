import api from "../../services/api";
import {useEffect,useState} from 'react';
import { Link } from "react-router-dom";
import './style.css';

export default function Home() {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        async function loadFilms(){
            const response = await api.get('/r-api/?api=filmes');
            //console.log(response);
            if (response.status === 200) {
                setFilms(response.data);
            }else{
                alert("erro ao invocar api code : "+ response.status)
            }
        }
        loadFilms();
    },[]);

    return (
        <div className="container">
           <div className="list-films">
            {films.map(film =>{
                return (
                    <article key={film.id}>
                        <strong>
                            {film.nome}
                        </strong>
                        <img src={film.foto}/>
                       <Link to={"/film/"}>Acessar</Link>
                    </article>
                )
            })}
            </div>
        </div>
    )
}