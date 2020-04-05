import React from 'react'
//CSS
import '../css/Pago.css'

class Pago extends React.Component{
    
    constructor(props){
        super(props)
        this.state = 
            {
                nombreTargeta:'',
                numeroTargeta:''
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