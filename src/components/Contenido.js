import React from 'react'
//CSS
import '../css/Contenido.css'

class Contenido extends React.Component{
    
    _isMounted = false;
    
    constructor(props){
        super(props)
        this.state = 
            {
                cantidadEscogida:'1'
            }
    }

    componentDidMount(){
        this._isMounted = true;
        console.log(this.props.objeto)
        localStorage.setItem('precio',this.props.objeto.precio)
        localStorage.setItem('cantidadEscogida','1')
        localStorage.setItem('key',this.props.objeto.codigo)
        localStorage.setItem('cantidad',this.props.objeto.cantidad)
    }

    componentWillUnmount(){
        this._isMounted = false;
        localStorage.removeItem('precio')
        localStorage.removeItem('cantidadEscogida')
        localStorage.removeItem('key')
        localStorage.removeItem('cantidad')
    }

    handleClickComprar = () => {

        fetch('http://localhost:3001/api/allProduct',{methos:'PUT'})
        .then(data => data.json())
        .then(response => {

        })
    }
    
    guardarCantidad = (params) => {
        this.setState({cantidadEscogida:params.target.value})
        localStorage.setItem('cantidadEscogida',this.state.cantidadEscogida)
    }

    render(){
        return(
            <div className='divContenido'>
                <div className='divImagen'>
                    <img src={this.props.objeto.foto}></img>
                </div>

                <div className='divCaracteristicas'>
                    <div className='divBoton'>
                        <input className='bAtras' type='button' value='ATRAS' onClick={this.props.eCerrarVentana}></input>
                        <h3>{this.props.objeto.nombre.toUpperCase()}</h3>
                        <p><strong>MARCA:</strong> {this.props.objeto.marca}</p>
                        <p><strong>TALLA:</strong> {this.props.objeto.talla}</p>
                        <p><strong>DISPONIBLES:</strong> {this.props.objeto.cantidad}</p>
                        <p><strong>PRECIO:</strong> {this.props.objeto.precio}€</p>
                        <input type='number' value={this.state.cantidadEscogida} min='1' max={this.props.objeto.cantidad} onChange={this.guardarCantidad}></input>
                        <input className='bComprar' type='button' onClick={this.props.mVentanaPago} value='Comprar'></input>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contenido