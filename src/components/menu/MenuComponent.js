import React from 'react';
import Radium from 'radium';
import { Container, Row, Col } from 'reactstrap';


class MenuComponent extends React.Component{
    constructor(props){
        super(props);
    }

    getStyles() {
        return {
            item : {
                marginLeft : '2%',
                ':hover' : {
                    color : "#eee",
                    cursor: 'pointer',
                    
                } 
            },
            menu : {
                width: '100%',
                backgroundColor: '#332a2a'
            }
        };
    }
    
    
   
    
	render(){
        const styles = this.getStyles();
		return(
                <Row style={styles.menu}>
                    <span style={styles.item}>Deconnexion</span>
                </Row>
		)
	}
}


export default Radium(MenuComponent);
