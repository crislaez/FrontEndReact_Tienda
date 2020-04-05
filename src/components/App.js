import React from 'react'
//CSS
import '../css/App.css'
//COMPONENTES
import Header from './Header'
import Section from './Section'
import Footer from './Footer'

class App extends React.Component{

    constructor(props){
        super(props);

        this.state = 
            {
                pagina:'vertodo',
                objeto:{}
            }
    }

    cambioSeccion = (event) => {
        if(event.target.id == 'bVerTodo'){
            this.setState({pagina:'vertodo'})
        }
        else  if(event.target.id == 'bCategoria'){
            this.setState({pagina:'categoria'})
        }
        else  if(event.target.id == 'bSobreNosotros'){
            this.setState({pagina:'sobrenosotros'})
        }
       
    }

    ventanaContenido = (event) => {
       //cojemos todos los dataset del articulo que hemos escogio
       //lo metemos en un objeto y a su vez lo metemos en el estado
       //para pasarselo por props al componente Contenido
        let obj = 
            {
                codigo:event.target.dataset.codigo,
                foto:event.target.dataset.foto,
                nombre:event.target.dataset.nombre,
                marca:event.target.dataset.marca,
                talla:event.target.dataset.talla,
                cantidad:event.target.dataset.cantidad,
                precio:event.target.dataset.precio
            }
        this.setState({pagina:'contenido', objeto:obj})
    }

    volverAtras = () => {
        this.setState({pagina:'vertodo'})
    }
    
    render(){
        return(
            <div>
                <Header evento={this.cambioSeccion}></Header>
                <Section pagina={this.state.pagina} eAbrirVentana={this.ventanaContenido} eCerrarVentana={this.volverAtras} objeto={this.state.objeto}></Section>
                <Footer></Footer>
            </div>
        )
    }
}

export default App