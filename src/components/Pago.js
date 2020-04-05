import React from 'react'
//CSS
import '../css/Pago.css'

class Pago extends React.Component{

    _isMounted = false;
    
    constructor(props){
        super(props)
        this.state = 
            {
                nombreTargeta:'',
                numeroTargeta:'',
                cantidad:'',
                precio:''
            }
    }

    componentDidMount(){
        this._isMounted = true;
        this.setState({cantidad:parseInt(localStorage.getItem('cantidad'))})
        this.setState({precio:parseInt(localStorage.getItem('precio'))})
    }

    componentWillUnmount(){
        this._isMounted = false;
        localStorage.removeItem('cantidad')
        // localStorage.removeItem('precio')
    }

    handleSubmit = (event) => {

        event.preventDefault();

        if(!this.state.nombreTargeta || !/[A-Za-z]+$/.test(this.state.nombreTargeta)){
            alert('Rellene el nombre de la targeta correctamente')
        }
        else if(!this.state.numeroTargeta || !/^\d{8}$/.test(this.state.numeroTargeta)){
            alert('Rellene el numero de la targeta correctamente')
        }
        else{
            console.log(this.state.nombreTargeta)
            console.log(this.state.numeroTargeta)
            alert('Gracias')
            const atrasVentanaPago = this.props.atrasVentanaPago
            atrasVentanaPago()
            // const eCerrarVentana = this.props.eCerrarVentana;
            // eCerrarVentana();
        }
        
    }

    render(){
        return(
            <div className='divContenedorPago'>
                <div className='divPago'>
                    <div className='divTituloPago'>
                        <h2>Pago</h2>
                    </div>
                    <div className='divBotonPago'>
                        <button onClick={this.props.atrasVentanaPago}>X</button>
                    </div>

                    <div className='divCantidad'>
                            <p><strong>Cantidad:</strong> {this.state.cantidad}</p>
                            <p><strong>Precio:</strong> {this.state.cantidad*this.state.precio}€</p>
                    </div>

                    <form className='formPago' onSubmit={this.handleSubmit} action='' method=''>
                        <input type='text' placeholder='nombre de la targeta...' onChange={(params) => {this.setState({nombreTargeta:params.target.value})}}></input>
                        <input type='text' placeholder='numero de la targeta...' onChange={(params) => {this.setState({numeroTargeta:params.target.value})}}></input>
                        <input type='submit' value='pago'></input>
                    </form>

                </div>
            </div>
        )
    }
}

export default Pago