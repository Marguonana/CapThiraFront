import React from 'react';
import Radium from 'radium';
import { Container, Row, Col, Nav } from 'reactstrap';
import { getStyles } from './navigationStyle.js'


class NavigationComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            liste : ['Mon profil', 'Mes abonnements', 'Message', 'Paramètre', 'Deconnexion']
        }
    }



     

       
    render(){
        const styles = getStyles();
        let menuItem = 
            this.state.liste.map( (el,index) => {
                return ( 
                        <li key={'liste' + index} style={styles.item} >{el}</li>
                )
            });

    
         
        return(
                <Nav style={styles.nav}>
                    <div style={styles.logo}>
                        
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
