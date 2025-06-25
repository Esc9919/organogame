import { useState } from 'react'
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {

  const [nome, setNome] = useState('')
  const [plataforma, setPlataforma] = useState('')
  const [imagem, setImagem] = useState('')
  const [genero, setGenero] = useState('')


  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoJogoCadastrado({
      nome,
      plataforma,
      imagem,
      genero
    })
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}> 
            <h2>Preencha os dados para criar o card do jogo</h2>
            <CampoTexto 
              obrigatorio={true}
              label="Nome do Jogo"
              placeholder="Digite o nome do jogo"
              valor={nome}
              aoAlterado={valor => setNome(valor)}
            />
            <CampoTexto 
              obrigatorio={true}
              label="Plataforma"
              placeholder="Digite a plataforma do jogo"
              valor={plataforma}
              aoAlterado={valor => setPlataforma(valor)}
            />
            <CampoTexto 
              label="Imagem" 
              placeholder="Digite o endereço da imagem" 
              valor={imagem}
              aoAlterado={valor => setImagem(valor)}
            />
            <ListaSuspensa 
              obrigatorio={true} 
              label='Generos' 
              itens={props.generos} 
              value={genero}
              aoAlterado={valor => setGenero(valor)}
            />
            <Botao>
                Criar Card
            </Botao>
      </form>
    </section>
  );
};

export default Formulario;
