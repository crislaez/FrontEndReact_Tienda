import React from 'react'
//CSS
import '../css/VerTodo.css'

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
                                    <div key={key} data-codigo={data._id} data-nombre={data.nombre} data-marca={data.marca} data-precio={data.precio} data-cantidad={data.cantidad} data-talla={data.talla} data-foto={data.foto} className='divProducto' onClick={this.props.eAbrirVentana}>
                                        <img data-codigo={data._id} data-nombre={data.nombre} data-marca={data.marca} data-precio={data.precio} data-cantidad={data.cantidad} data-talla={data.talla} data-foto={data.foto} src={data.foto}></img>
                                        <h3 data-codigo={data._id} data-nombre={data.nombre} data-marca={data.marca} data-precio={data.precio} data-cantidad={data.cantidad} data-talla={data.talla} data-foto={data.foto}>{data.nombre}</h3>
                                        <p data-codigo={data._id} data-nombre={data.nombre} data-marca={data.marca} data-precio={data.precio} data-cantidad={data.cantidad} data-talla={data.talla} data-foto={data.foto}><strong data-codigo={data._id} data-nombre={data.nombre} data-marca={data.marca} data-precio={data.precio} data-cantidad={data.cantidad} data-talla={data.talla} data-foto={data.foto} >Marca:</strong> {data.marca}</p>
                                        <p data-codigo={data._id} data-nombre={data.nombre} data-marca={data.marca} data-precio={data.precio} data-cantidad={data.cantidad} data-talla={data.talla} data-foto={data.foto}><strong data-codigo={data._id} data-nombre={data.nombre} data-marca={data.marca} data-precio={data.precio} data-cantidad={data.cantidad} data-talla={data.talla} data-foto={data.foto} >Precio:</strong> {data.precio}€</p>
                                        <p data-codigo={data._id} data-nombre={data.nombre} data-marca={data.marca} data-precio={data.precio} data-cantidad={data.cantidad} data-talla={data.talla} data-foto={data.foto}><strong data-codigo={data._id} data-nombre={data.nombre} data-marca={data.marca} data-precio={data.precio} data-cantidad={data.cantidad} data-talla={data.talla} data-foto={data.foto} >Cantidad:</strong> {data.cantidad}</p>
                                        <p data-codigo={data._id} data-nombre={data.nombre} data-marca={data.marca} data-precio={data.precio} data-cantidad={data.cantidad} data-talla={data.talla} data-foto={data.foto}><strong data-codigo={data._id} data-nombre={data.nombre} data-marca={data.marca} data-precio={data.precio} data-cantidad={data.cantidad} data-talla={data.talla} data-foto={data.foto} >Talla:</strong> {data.talla}</p>
                                    </div>
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