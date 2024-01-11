import axios from 'axios';
import { useEffect, useState } from 'react';
import Publicacao from './Publicacao';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  const [publicacoes, setPublicacoes] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then((resposta) => {
      setPublicacoes(resposta.data);
    });

  }, []);


  return (
    <div className="App">
      <div className='principal'>
        {publicacoes.map((publicacao) => {
          return <Publicacao
          id={publicacao.id}
          titulo={publicacao.title}
          conteudo={publicacao.description}
          imagem={publicacao.image} 
          money={publicacao.price}
          
          />

        })}

      </div>

    </div>
  );
}

export default App;
