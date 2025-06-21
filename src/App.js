import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Genero from './components/Genero';

function App() {

const generos = [
  {
    nome: 'Mundo Aberto',
    corPrimaria: '#1a0450',
    corSecundaria: '#2d0877'
  },
  {
    nome: 'FPS',
    corPrimaria: '#33075c',
    corSecundaria: '#4a0d83'
  },
  {
    nome: 'RPG',
    corPrimaria: '#12013a',
    corSecundaria: '#260b5f'
  },
  {
    nome: 'Aventura',
    corPrimaria: '#2e005d',
    corSecundaria: '#461089'
  },
  {
    nome: 'Esporte',
    corPrimaria: '#0a0140',
    corSecundaria: '#1e0b66'
  }
];

  const [jogos, setJogos] = useState([]);

  const aoNovoJogoAdicionado = (jogo) => {
    console.log(jogo)
    setJogos([...jogos, jogo]);
  }

  return (
    <div className="App">
      <Banner />    
      <Formulario aoJogoCadastrado={jogo => aoNovoJogoAdicionado(jogo)}/>
        {generos.map(generos => <Genero key={generos.nome} nome={generos.nome} corPrimaria={generos.corPrimaria} corSecundaria={generos.corSecundaria}/>)}
    </div>
  );
}

export default App;
