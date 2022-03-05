import './header.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
export default function Header(){
    return(
        <header>
          <Link to='/' className='logo'>Filmaria</Link> 
          <Link to='/saves' className='save'>Salvos</Link>
        </header>
    )
}