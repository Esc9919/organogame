import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';

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
    </div>
  );
}

export default App;
