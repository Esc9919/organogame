import './CampoTexto.css'

const CampoTexto = (props) => {
    console.log(props.label)
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input type="text" placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto