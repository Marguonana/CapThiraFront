import React from 'react';
import Radium from 'radium';
import { Container, Row, Col } from 'reactstrap';
import { getStyles } from './signUpStyle';

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            createAccount : true,
            pseudo: '',
            

        }
    }   
    /** SETTER ********************* */
    setPseudo = (event)=> {
        if(event){
            this.setState({pseudo : event.target.value});
            console.log(this.state.pseudo)
        }
        
    }

    setPassword = (event)=> {
        if(event){
            this.setState({password : event.target.value});
            console.log(this.state.password)
        }
        
    }

    setBirthday = (event)=> {
        if(event){
            this.setState({birthday : event.target.value});
            console.log(this.state.birthday)
        }
        
    }

    setEmail = (event)=> {
        if(event){
            this.setState({email : event.target.value});
            console.log(this.state.email)
        }
        
    }



	render(){
        const styles = getStyles();
        let pseudo = (<Row><input style={styles.pseudo} type="text" placeholder="Mon pseudo" onBlur={event => this.setPseudo(event)} onChange={event => this.setPseudo(event)} value={this.state.pseudo} ></input></Row>);
        let space = (<Row></Row>);
        let email = (<Row><input style={styles.email} type="email" placeholder="user1@wanadoo.fr" onBlur={event => this.setEmail(event)} onChange={event => this.setEmail(event)} value={this.state.email}></input></Row>);
        let password = (<Row><input style={styles.password} type="password" placeholder="********" onChange={event => this.setPassword(event)} value={this.state.password}></input></Row>);
        let birthday = (<Row><input style={styles.birthday} type="date" placeholder="01/01/1995" onChange={event => this.setBirthday(event)} value={this.state.birthday}></input></Row>);
        
        let createAccount =  (
            <Container>
                {space}
                {pseudo}
                {space}
                {email}
                {space}
                {password}
                {space}
                {birthday}
            </Container>
        ) ;
        let validator = (
            <Container>
                <button>Confirmer</button>
            </Container>
        )
        let signIn = (
            <Container>
                {space}
                {pseudo}
                {space}
                {password}
            </Container>
        ) ;

        let groupView = this.state.createAccount ? createAccount : signIn;
		return(

            <Container style={styles.form}>
                <Container style={styles.header}></Container>
                <Row>
                    <Col>Créer un compte</Col><Col></Col><Col>Se connecter</Col> 
                </Row>
                {groupView}
                {validator}
            </Container>  
		)
	}
}


export default Radium(SignUp);
