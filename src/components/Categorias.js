import React from 'react'
//CSS
import '../css/Categorias.css'
//COMPONENTE
import Articulo from './Articulo'

class Categorias extends React.Component{

    _isMounted = false;
    
    constructor(props){
        super(props)
        this.state = 
            {
                categoria:'camiseta',
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
        let aux = []
        console.log(this.state.categoria)
        fetch('http://localhost:3001/api/allProduct',{'method':'GET'})
        .then(data => data.json())
        .then(response => {
            // console.log(response)
            response.producto.map((data, key) => {
                if(data.categoria == this.state.categoria){
                    aux.push(data)
                    // console.log(aux)
                }
            })
            this.setState({array:aux})
        })
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
                        {
                            this._isMounted && this.state.array
                            ?
                            this.state.array.map((data, key) => {
                                return(
                                    <Articulo key={key} codigo={data._id} nombre={data.nombre} marca={data.marca} precio={data.precio} cantidad={data.cantidad} talla={data.talla} foto={data.foto} className='divProducto' click={this.props.eAbrirVentana}>
                                    </Articulo>
                                )
                            })
                            :
                            <div></div>
                        }
                    </div>
                
                </div>
            </div>
        )
    }
}

export default Categorias