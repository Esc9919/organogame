import Jogo from '../Jogo';
import './Genero.css';

const Genero = (props)=> {
    const css = { backgroundColor: props.corSecundaria }
    return (
        <section className='genero' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <Jogo />
        </section>
    )
}

export default Genero;