import {Link} from 'react-router-dom'

export default function Error(){
    return (
    <div>
        <h1>error 404 - página não encontrada, favor retorne a rome</h1>
        <Link to="/">Home</Link>
      </div>
    )
}