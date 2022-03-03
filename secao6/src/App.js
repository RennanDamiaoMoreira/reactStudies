
import React,{useState} from 'react';

function App() {
  const [tarefas, setTarefas]=useState([
    'Pagar a conta de luz',
  'estudar  react hooks'
  ]);

  const [input,setInput] = useState('');
  const [nome , setNome] = useState('Rennan');

  function handleAdd(){
    
    setTarefas([...tarefas,input]);
  }

  return (
    <div >
      <h1>HOOKS</h1>
      <ul>
        {tarefas.map(tarefa =>(<li key={tarefa}>{tarefa}</li>))}
      </ul>
      <h2>{nome}</h2>
      <input type='text' onChange={(e)=> setInput(e.target.value)}></input>
      <button onClick={handleAdd}>Adicionar</button>
    </div>
  );
}

export default App;
