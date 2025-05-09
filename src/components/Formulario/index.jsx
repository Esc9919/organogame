import CampoTexto from "../CampoTexto";
import "./Formulario.css";

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
            <h2>Preencha os dados para criar o card do jogo</h2>
            <CampoTexto label="Nome do Jogo" placeholder="Digite o nome do jogo" />
            <CampoTexto label="Gênero" placeholder="Digite gênero do jogo" />
            <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
            <button className="formulario_botao"> Criar Card</button>
      </form>
    </section>
  );
};

export default Formulario;
