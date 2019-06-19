import React from 'react';
import toastr from 'reactjs-toastr';
import 'reactjs-toastr/lib/toast.css';
import Radium from 'radium';
import { Container, Row, Col, Nav } from 'reactstrap';
import { getStyles } from './navigationStyle.js'

const navigationService = require('./navigationService');


class NavigationComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            liste : ['Actualité','Mon profil', 'Mes abonnements', 'Message', 'Deconnexion'],
            user : localStorage.getItem('pseudo_user')
        }
    }


    toastrContainer = () => {
        return (<div id="toast-container" style={styles.toastr}></div>);
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
                    <div id="toast-container" style={styles.toastr}></div>
                    <div style={styles.logoContainer}>
                       
                    </div>
                    <hr/>
                    <div style={styles.welcome}>Pseudo du compte: <b>{this.state.user}</b></div>
                    <ul style={styles.ul}>
                        {menuItem}
                    </ul>
                </Nav>
        )
    }
}


export default Radium(NavigationComponent);
