import React from 'react'
//CSS
import '../css/VerTodo.css'
//COMPONENTE
import Articulo from './Articulo'

class VerTodo extends React.Component{

    _isMounted = false;

    constructor(props){
        super(props)

        this.state = 
            {
                array:[]
            }
    }

    componentDidMount(){
        //
        this._isMounted = true;
        localStorage.removeItem('cantidad')
        localStorage.removeItem('precio')
        let aux = [];

        fetch('http://localhost:3001/api/allProduct',{method:'GET'})
        .then(data => data.json())
        .then(response => {
            // console.log(response.producto)
            this.setState({array:response.producto})            
        })
    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    render(){
        return(
            <div>
                <div className='divTitulo'>
                    <h2>Ver Todo</h2>
                </div>

                <div className='divContenedor'>
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
        )
    }
}

export default VerTodo