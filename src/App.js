import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Genero from './components/Genero';

function App() {

  const [jogos, setJogos] = useState([]);

  const aoNovoJogoAdicionado = (jogo) => {
    console.log(jogo)
    setJogos([...jogos, jogo]);
  }

  return (
    <div className="App">
      <Banner />    
      <Formulario aoJogoCadastrado={jogo => aoNovoJogoAdicionado(jogo)}/>
        <Genero nome="Mundo Aberto"/>
        <Genero nome="FPS"/>
        <Genero nome="RPG"/>
        <Genero nome="Aventura"/>
        <Genero nome="Esporte"/>
    </div>
  );
}

export default App;
