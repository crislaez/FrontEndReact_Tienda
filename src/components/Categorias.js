import React from 'react'
//CSS
import '../css/Categorias.css'

class Categorias extends React.Component{

    _isMounted = false;
    
    constructor(props){
        super(props)
        this.state = 
            {
                categoria:'',
                array:[]
            }
    }

    componentDidMount(){
        this._isMounted = true;
    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    handleSubmit = (event) => {
        event.preventDefault();

        console.log(this.state.categoria)
    }

    render(){
        return(
            <div>
                <div className='divTitulo'>
                    <h2>Categorias</h2>
                </div>

                <div className='divContenedor'>
                    <form className='formBuscadorCategorias' onSubmit={this.handleSubmit}>
                        <select type='text' placeholder='categoria' value={this.state.categoria} onChange={(params) => {this.setState({categoria:params.target.value})}}>
                            <option value='camiseta'>camiseta</option>
                            <option value='pantalon'>pantalon</option>
                            <option value='zapatos'>zapatos</option>
                            <option value='sudadera'>sudadera</option>
                            <option value='jersey'>jersey</option>
                            <option value='chaqueta'>chaqueta</option>
                        </select>
                        <input type='submit' value='Buscar'></input>
                    </form>

                    <div className='divCategoria'>
                    </div>
                
                </div>
            </div>
        )
    }
}

export default Categorias