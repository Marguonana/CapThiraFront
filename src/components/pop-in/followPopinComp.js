import React from 'react';
import Radium from 'radium';
import { Container, Row, Col } from 'reactstrap';
import { getStyles } from './followPopinStyle';
import toastr from 'reactjs-toastr';
import 'reactjs-toastr/lib/toast.css';
const styles = getStyles();
const moment = require("moment");

class followPopinComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayPopin : false
        }
    }   
    
    setMode = (event)=> {
        if(event){
            this.setState({pseudo : event.target.value});
            console.log(this.state.pseudo)
        }
        
    }

    


	render(){
		return(
            <Container id="popin" style={styles.popin}>
                <div style={styles.popinContent}>
                    Ceci est la popin
                </div>    
            </Container>  
		)
	}
}


export default Radium(followPopinComp);