import React from 'react';
import Radium from 'radium';
import { Container, Row, Col } from 'reactstrap';
import { getStyles } from './signUpStyle';
import toastr from 'reactjs-toastr';
import 'reactjs-toastr/lib/toast.css';
const styles = getStyles();
const moment = require("moment");

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

    setFirstname = (event)=> {
        if(event){
            this.setState({firstname : event.target.value});
            console.log(this.state.firstname)
        }
        
    }

    setLastname = (event)=> {
        if(event){
            this.setState({lastname : event.target.value});
            console.log(this.state.lastname)
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

    setSignTitle(){
        this.setState({ createAccount : !this.state.createAccount});
        this.state.createAccount ?  this.setState({ signTitle : (<Col style={styles.textConnexion} onClick={(e) => this.setState.createAccount = false}>Se connecter <i className="fa fa-chevron-right" aria-hidden="true"></i></Col>)  }) : this.setState({  signTitle :  (<Col style={styles.textConnexion} onClick={(e) => this.setState.createAccount = true}><i className="fa fa-chevron-left" aria-hidden="true"></i> Créer un compte</Col>)  })
    };

    getAge = () => {
        return parseInt(moment(this.state.birthday).fromNow());
    }



    /****************************** TOKEN */
    setToken(idToken) {
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken)
    }

    getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token')
    }

    logout() {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
    }

    getProfile() {
        // Using jwt-decode npm package to decode the token
        return decode(this.getToken());
    }

    validate =(e) => {

        if (this.state.createAccount){

            //TODO Ajouter la gestion des erreurs si tt les champs pr createAccount ne sont pas remplis
            var dataToSend = {
                "nameUser": this.state.firstname,
                "lastname": this.state.lastname,
                "age": this.getAge(),
                "username": this.state.email,
                "password": this.state.password
            }

            var requestOptions = {
                method: 'POST',
                body: JSON.stringify(dataToSend),
                headers: {"Content-Type": "application/json"}
              };
              console.log("Données : " + dataToSend)
              fetch("http://localhost:3000/users/post/", requestOptions).then((response) => {
                response.json();
              }).then((result) => {
                console.log(result);
                toastr.info("L'utilisateur a été ajouté avec succès");
                window.location.reload();
              }).catch((error) => {
                toastr.error('Erreur d\'envoie des params. L\'utilisateur n\'a pas été ajouté ');
              });

        }else{

            //TODO Ajouter la gestion des erreurs si tt les champs pr createAccount ne sont pas remplis
            var dataToSend = {
                "username": this.state.email,
                "password": this.state.password
            }

            var requestOptions = {
                method: 'GET',
                // body: JSON.stringify(dataToSend),
                headers: {'Accept': 'application/json',"Content-Type": "application/json"}
            };

            console.log("Données : " + JSON.stringify(dataToSend));
            fetch("http://localhost:3000/users/login/" + this.state.email + "/" + this.state.password).then((response) => {
                console.log("statut " + response.status)
                response.json();
            }).then((result) => {
                console.log(result);
                toastr.info("Connexion réussi "+ result.token);
                localStorage.setItem('token', result.token);
            }).catch((error) => {
                toastr.error('Echec de la connexion');
            });
            
        }
            
    }

	render(){
   
        console.log("value of createAccount "  + this.state.createAccount);
        let pseudo = (<Row><input style={styles.pseudo} type="text" placeholder="Mon pseudo" onBlur={event => this.setPseudo(event)} onChange={event => this.setPseudo(event)} value={this.state.pseudo} ></input></Row>);
        let space = (<Row></Row>);
        let firstname = (<Row><input style={styles.pseudo} type="text" placeholder="Prénom" onBlur={event => this.setFirstname(event)} onChange={event => this.setFirstname(event)} value={this.state.firstname} ></input></Row>);
        let lastname = (<Row><input style={styles.pseudo} type="text" placeholder="Nom" onBlur={event => this.setLastname(event)} onChange={event => this.setLastname(event)} value={this.state.lastname} ></input></Row>);
        let email = (<Row><input style={styles.email} type="email" placeholder="user1@wanadoo.fr" onBlur={event => this.setEmail(event)} onChange={event => this.setEmail(event)} value={this.state.email}></input></Row>);
        let password = (<Row><input style={styles.password} type="password" placeholder="********" onChange={event => this.setPassword(event)} value={this.state.password}></input></Row>);
        let birthday = (<Row><input style={styles.birthday} type="date" placeholder="01/01/1995" onChange={event => this.setBirthday(event)} value={this.state.birthday}></input></Row>);
        
        let createAccount =  (
            <Container>
                {firstname}
                {space}
                {lastname}
                {space}
                {pseudo}
                {space}
                {email}
                {space}
                {password}
                {space}
                {birthday}
            </Container>
        );

        let validator = (
            <Container>
                <button style={styles.button} onClick={(e) => this.validate(e)}>Confirmer</button>
            </Container>
        );

        let signIn = (
            <Container>
                {space}
                {email}
                {space}
                {password}
            </Container>
        ) ;

        let signTitle =  this.state.createAccount ? (<Col style={styles.textConnexion} onClick={(e) => this.setSignTitle()}>Se connecter <i className="fa fa-chevron-right" aria-hidden="true"></i></Col>) : (<Col style={styles.textConnexion} onClick={()=>this.setSignTitle()}><i className="fa fa-chevron-left" aria-hidden="true"></i> Créer un compte</Col>) ;
        let groupView = this.state.createAccount ? createAccount : signIn;
		return(

            <Container style={styles.form}>
                <Row style={styles.header}>
                    {signTitle}
                </Row>
                {groupView}
                {validator}
                <Container style={styles.bottom}></Container>
            </Container>  
		)
	}
}


export default Radium(SignUp);