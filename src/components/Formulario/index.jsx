import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {

  const generos = [
    'Mundo Abrerto',
    'FPS',
    'RPG',
    'Aventura',
    'Esporte'
  ]

  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log('Form foi submetido');
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}> 
            <h2>Preencha os dados para criar o card do jogo</h2>
            <CampoTexto obrigatorio={true} label="Nome do Jogo" placeholder="Digite o nome do jogo" />
            <CampoTexto obrigatorio={true} label="Gênero" placeholder="Digite gênero do jogo" />
            <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
            <ListaSuspensa obrigatorio={true} label='Genero' itens={generos} />
            <Botao>
                Criar Card
            </Botao>
      </form>
    </section>
  );
};

export default Formulario;
