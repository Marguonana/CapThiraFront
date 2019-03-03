import React from 'react';
import Radium from 'radium';
import { Container, Row, Col } from 'reactstrap';
import { getStyles } from './menuStyle'


class MenuComponent extends React.Component{
    constructor(props){
        super(props);
    }

       
	render(){
        const styles = getStyles();
		return(
                <Row style={styles.menu}>
                    <span style={styles.item}>Deconnexion</span>
                </Row>
		)
	}
}


export default Radium(MenuComponent);
