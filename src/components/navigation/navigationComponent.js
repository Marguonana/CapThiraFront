import React from 'react';
import Radium from 'radium';
import { Container, Row, Col, Nav } from 'reactstrap';
import { getStyles } from './navigationStyle.js'

const navigationService = require('./navigationService');


class NavigationComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            liste : ['Mon profil', 'Mes abonnements', 'Message', 'Paramètres', 'Deconnexion']
        }
    }



     

       
    render(){
        const styles = getStyles();
        let menuItem = 
            this.state.liste.map( (item,index) => {
                return ( 
                        <li key={'liste' + index} style={styles.item} onClick={(e) => navigationService.nav(e, item,this.props)}>{item}</li>
                )
            });

    
         
        return(
                <Nav style={styles.nav}>
                    <div style={styles.logoContainer}>
                       
                    </div>
                    <hr/>
                    <ul style={styles.ul}>
                        {menuItem}
                    </ul>
                </Nav>
        )
    }
}


export default Radium(NavigationComponent);
