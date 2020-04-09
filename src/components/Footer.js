import React from 'react'
//CSS
import '../css/Footer.css'
//FONT AWESOME
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faTwitter, faInstagram, faTwitch, faGit} from '@fortawesome/free-brands-svg-icons'

class Footer extends React.Component{

    render(){
        return(
            <footer>
                <a style={{marginLeft:'35%'}} href='https://es-es.facebook.com/'><span style={{color:'#579EEB'}}><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></span></a>
                <a href='https://www.instagram.com/'><span style={{color:'#F95B6E'}}><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></span></a>
                <a href='https://twitter.com/'><span style={{color:'#579EEB'}}><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></span></a>
                <a href='https://www.twitch.tv/'><span style={{color:'#503EA9'}}><FontAwesomeIcon icon={faTwitch}></FontAwesomeIcon></span></a>
                <a href='https://github.com/crislaez'><span style={{color:'#C1C1C1'}}><FontAwesomeIcon icon={faGit}></FontAwesomeIcon></span></a>
            </footer>
        )
    }
}

export default Footer