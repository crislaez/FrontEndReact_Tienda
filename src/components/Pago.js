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
                cantidadEscogida:'',
                precio:''
            }
    }

    componentDidMount(){
        this._isMounted = true;
        this.setState({cantidadEscogida:parseInt(localStorage.getItem('cantidadEscogida'))})
        this.setState({precio:parseInt(localStorage.getItem('precio'))})
    }

    componentWillUnmount(){
        this._isMounted = false;
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
            let cantidadTotal = parseInt(localStorage.getItem('cantidad')) - parseInt(localStorage.getItem('cantidadEscogida'))
            console.log(cantidadTotal)
            let data = new URLSearchParams('cantidad='+cantidadTotal)

            fetch('http://localhost:3001/api/updateProduct/'+localStorage.getItem('key'),{method:'PUT',body:data})
            .then(data => data.json())
            .then(response => {
                console.log(response)
            })
            alert('Gracias')           

            // localStorage.removeItem('precio')
            // localStorage.removeItem('cantidad')
            // localStorage.removeItem('key')
            // localStorage.removeItem('cant')

            const atrasVentanaPago = this.props.atrasVentanaPago
            const eCerrarVentana = this.props.eCerrarVentana
            //cerramos el modal de pago
            atrasVentanaPago()

            //y se cargara VerTodo
            setTimeout(() => {
                eCerrarVentana();
                console.log('Perfecto')
            },100)
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
                            <p><strong>Cantidad:</strong> {this.state.cantidadEscogida}</p>
                            <p><strong>Precio:</strong> {this.state.cantidadEscogida*this.state.precio}€</p>
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