import {useParams} from 'react-router-dom'

export default function Product(){
    const {id} = useParams();
    return (
    <div>
        <h1>Grade de produto</h1>
        <span>Prduto selecionado : {id} </span>
      </div>
    )
}