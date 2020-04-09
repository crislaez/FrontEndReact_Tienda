import React from 'react'
//CSS
import '../css/Articulo.css'

class Articulo extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div data-codigo={this.props.codigo} data-nombre={this.props.nombre} data-marca={this.props.marca} data-precio={this.props.precio} data-cantidad={this.props.cantidad} data-talla={this.props.talla} data-foto={this.props.foto} className='divProducto' onClick={this.props.click}>
                <img data-codigo={this.props.codigo} data-nombre={this.props.nombre} data-marca={this.props.marca} data-precio={this.props.precio} data-cantidad={this.props.cantidad} data-talla={this.props.talla} data-foto={this.props.foto} src={this.props.foto}></img>
                <h3 data-codigo={this.props.codigo} data-nombre={this.props.nombre} data-marca={this.props.marca} data-precio={this.props.precio} data-cantidad={this.props.cantidad} data-talla={this.props.talla} data-foto={this.props.foto}>{this.props.nombre}</h3>
                <p data-codigo={this.props.codigo} data-nombre={this.props.nombre} data-marca={this.props.marca} data-precio={this.props.precio} data-cantidad={this.props.cantidad} data-talla={this.props.talla} data-foto={this.props.foto}><strong data-codigo={this.props._id} data-nombre={this.props.nombre} data-marca={this.props.marca} data-precio={this.props.precio} data-cantidad={this.props.cantidad} data-talla={this.props.talla} data-foto={this.props.foto} >Marca:</strong> {this.props.marca}</p>
                <p data-codigo={this.props.codigo} data-nombre={this.props.nombre} data-marca={this.props.marca} data-precio={this.props.precio} data-cantidad={this.props.cantidad} data-talla={this.props.talla} data-foto={this.props.foto}><strong data-codigo={this.props._id} data-nombre={this.props.nombre} data-marca={this.props.marca} data-precio={this.props.precio} data-cantidad={this.props.cantidad} data-talla={this.props.talla} data-foto={this.props.foto} >Precio:</strong> {this.props.precio}€</p>
                <p data-codigo={this.props.codigo} data-nombre={this.props.nombre} data-marca={this.props.marca} data-precio={this.props.precio} data-cantidad={this.props.cantidad} data-talla={this.props.talla} data-foto={this.props.foto}><strong data-codigo={this.props._id} data-nombre={this.props.nombre} data-marca={this.props.marca} data-precio={this.props.precio} data-cantidad={this.props.cantidad} data-talla={this.props.talla} data-foto={this.props.foto} >Cantidad:</strong> {this.props.cantidad}</p>
                <p data-codigo={this.props.codigo} data-nombre={this.props.nombre} data-marca={this.props.marca} data-precio={this.props.precio} data-cantidad={this.props.cantidad} data-talla={this.props.talla} data-foto={this.props.foto}><strong data-codigo={this.props._id} data-nombre={this.props.nombre} data-marca={this.props.marca} data-precio={this.props.precio} data-cantidad={this.props.cantidad} data-talla={this.props.talla} data-foto={this.props.foto} >Talla:</strong> {this.props.talla}</p>
            </div>
        )
    }
}

export default Articulo