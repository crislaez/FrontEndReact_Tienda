import React from 'react'
//CSS
import '../css/Header.css'
//IMG
import foto1 from '../img/foto1.jpg'
import foto2 from '../img/foto2.jpg'
import foto3 from '../img/foto3.jpg'
import foto4 from '../img/foto4.jpg'

class Header extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <header>
                <div className='headerleft'>
                    <h1>LaezShop</h1>
                </div>

                <nav>
                    <input id='bVerTodo' style={{'marginLeft':'40%'}} type='button' value='VER TODO' onClick={this.props.evento}></input>
                    <input id='bCategoria' type='button' value='CATEGORIAS' onClick={this.props.evento}></input>
                    <input id='bSobreNosotros' type='button' value='SOBRE NOSOTROS'onClick={this.props.evento}></input>
                </nav>
                
                <div className="slider">	
                    <ul>
                        <li><img src={foto1}/></li>
                        <li><img src={foto2}/></li>
                        <li><img src={foto3}/></li>
                        <li><img src={foto4}/></li>
                    </ul>
                </div>	
                            
            </header>
        )
    }
}

export default Header