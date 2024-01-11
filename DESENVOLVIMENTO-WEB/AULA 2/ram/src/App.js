import {useState, useEffect} from 'react';
import './App.css';
import Modal from './Modal';
//PARA INICIAR (NO TERMINAL)
//  cd ram
//  npm start

function App() {
  //useState definir status
  //
  const [personagens, setPersonagens] = useState([]);
  const [personagemAtual, setPersonagemAtual] = useState(null);

  useEffect(function () {
    
    fetch('https://rickandmortyapi.com/api/character')
    .then((resposta) => resposta.json())
    .then((dados) => {setPersonagens(dados.results);});

  },[])

  function aoClicar(personagem){
    setPersonagemAtual(personagem);
  }

  return (
    <div className="App">
      <ul id="lista">

        {personagens.map((personagem)=> {
          return <li key={personagem.id}>
          <img src={personagem.image} onClick={() => aoClicar(personagem)}/>
          <span className='nome'>{personagem.name}</span>
          </li>
        })}
      </ul>

      {personagemAtual && <Modal personagem={personagemAtual}/> }

    </div>
  );
}

export default App;
