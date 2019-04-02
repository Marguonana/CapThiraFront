import React from 'react';
import Radium from 'radium';
import { Container, Row, Col, Nav } from 'reactstrap';
import { getStyles } from './navigationStyle.js'


class NavigationComponent extends React.Component{
    constructor(props){
        super(props);
    }

       
	render(){
        const styles = getStyles();
		return(
                <Nav style={styles.nav}>
                    <span style={styles.item}>Deconnexion</span>
                </Nav>
		)
	}
}


export default Radium(NavigationComponent);
