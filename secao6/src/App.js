
import React,{useState} from 'react';

function App() {
  const [tarefas, setTarefas]=useState([
    'Pagar a conta de luz',
  'estudar  react hooks'
  ]);

  const [nome , setNome] = useState('Rennan');

  function handleAdd (){}

  return (
    <div >
      <h1>HOOKS</h1>
      <ul>
        {tarefas.map(tarefa =>(<li key={tarefa}>{tarefa}</li>))}
      </ul>
      <h2>{nome}</h2>

      <button onClick={handleAdd}>Adicionar</button>
    </div>
  );
}

export default App;
