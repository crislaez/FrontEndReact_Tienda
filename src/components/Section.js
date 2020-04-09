import React from 'react'
//CSS
import '../css/Section.css'
//IMPORT
import VerTodo from '../components/VerTodo'
import Categoria from '../components/Categorias'
import SobreNosotros from '../components/SobreNosotros'
import Contenido from '../components/Contenido'
import Pago from '../components/Pago'

class Section extends React.Component{

    _isMounted = false;

    constructor(props){
     super(props)
     this.state = 
        {
            ventanaPago:false
        }
    }

    componentDidMount(){
        this._isMounted = true;
    }

    componentWillMount(){
        this._isMounted = false;
    }
    
    mVentanaPago = () => {
        this.setState({ventanaPago:true})
        console.log('Dentro')
    }

    atrasVentanaPago = () => {
        this.setState({ventanaPago:false})
        console.log('Atras')
    }

    render(){
        return(
            <section>
                {
                    this.props.pagina == 'vertodo'
                    ?
                    <VerTodo eAbrirVentana={this.props.eAbrirVentana}></VerTodo>
                    :
                    this.props.pagina == 'categoria'
                    ?
                    <Categoria eAbrirVentana={this.props.eAbrirVentana}></Categoria>
                    :
                    this.props.pagina == 'sobrenosotros'
                    ?
                    <SobreNosotros></SobreNosotros>
                    :
                    this.props.pagina == 'contenido'
                    ?
                    <Contenido objeto={this.props.objeto} eCerrarVentana={this.props.eCerrarVentana} mVentanaPago={this.mVentanaPago} ></Contenido>
                    :
                    <div></div>
                }

                {
                    this.state.ventanaPago
                    ?
                    <Pago atrasVentanaPago={this.atrasVentanaPago} eCerrarVentana={this.eCerrarVentana}></Pago>
                    :
                    <div></div>
                }
            </section>
        )
    }
}

export default Section