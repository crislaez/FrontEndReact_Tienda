import React from 'react'
//CSS
import '../css/Contenido.css'

class Contenido extends React.Component{
    
    _isMounted = false;
    
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this._isMounted = true;
        console.log(this.props.objeto)
    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    handleClickComprar = () => {

        fetch('http://localhost:3001/api/allProduct',{methos:'PUT'})
        .then(data => data.json())
        .then(response => {

        })
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
                        <p><strong>UNIDADES:</strong> {this.props.objeto.cantidad}</p>
                        <p><strong>PRECIO:</strong> {this.props.objeto.precio}€</p>
                        <input className='bComprar' type='button' onClick={this.props.mVentanaPago} value='Comprar'></input>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contenido