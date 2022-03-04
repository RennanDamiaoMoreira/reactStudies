import {Link} from 'react-router-dom';

export default function Home() {
    return (
      <div>
        <h1>Bem vindo a home</h1>
        <Link to="/about">Sobre</Link>
      </div>
    )
  }