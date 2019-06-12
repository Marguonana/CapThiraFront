import React from 'react';
import Radium from 'radium';
import { Container, Row, Col } from 'reactstrap';
import { getStyles } from './signupStyle';
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
        }
        
    }

    setFirstname = (event)=> {
        if(event){
            this.setState({firstname : event.target.value});
        }
        
    }

    setLastname = (event)=> {
        if(event){
            this.setState({lastname : event.target.value});
        }
        
    }
    

    setPassword = (event)=> {
        if(event){
            this.setState({password : event.target.value});
        }
        
    }

    setBirthday = (event)=> {
        if(event){
            this.setState({birthday : event.target.value});
        }
        
    }

    setEmail = (event)=> {
        if(event){
            this.setState({email : event.target.value});
        }
        
    }

    setSignTitle(){
        this.setState({ createAccount : !this.state.createAccount});
        this.state.createAccount ?  this.setState({ signTitle : (<Col style={styles.textConnexion} onClick={(e) => this.setState.createAccount = false}>Se connecter <i className="fa fa-chevron-right" aria-hidden="true"></i></Col>)  }) : this.setState({  signTitle :  (<Col style={styles.textConnexion} onClick={(e) => this.setState.createAccount = true}><i className="fa fa-chevron-left" aria-hidden="true"></i> Créer un compte</Col>)  })
    };

    getAge = () => {
        return parseInt(moment(this.state.birthday).fromNow());
    }

    /****************************** User */
    setIdUser(idUser) {
        localStorage.setItem('id_user', idUser);
    }

    getIdUser() {
        return localStorage.getItem('id_user');
    }


    /****************************** User */
    setPseudoUser(pseudoUser) {
        localStorage.setItem('pseudo_user', pseudoUser);
    }

    getPseudoUser() {
        return localStorage.getItem('pseudo_user');
    }

    /****************************** TOKEN */
    setToken(idToken) {
        localStorage.setItem('id_token', idToken)
    }

    getToken() {
        return localStorage.getItem('id_token')
    }


    logout() {
        localStorage.removeItem('id_user');
        localStorage.removeItem('pseudo_user');
        localStorage.removeItem('id_token');
    }

    validate =(e) => {

        if (this.state.createAccount){

            //TODO Ajouter la gestion des erreurs si tt les champs pr createAccount ne sont pas remplis
            const dataToSend = {
                "nameUser": this.state.firstname,
                "lastname": this.state.lastname,
                "pseudo": this.state.pseudo,
                "age": this.getAge(),
                "username": this.state.email,
                "password": this.state.password
            }

            const requestOptions = {
                method: 'POST',
                body: JSON.stringify(dataToSend),
                headers: {"Content-Type": "application/json"}
              };
            //   console.log("Données : " + dataToSend)
              fetch("http://localhost:3000/users/post/", requestOptions).then((response) => {
                response.json();
              }).then((result) => {
                console.log(result);
                toastr.info("New user added !");
                window.location.reload();
              }).catch((error) => {
                toastr.error('Request status : Failed ! Have you missed something?');
              });

        }else{

            //TODO Ajouter la gestion des erreurs si tt les champs pr createAccount ne sont pas remplis
            const dataToSend = {
                "username": this.state.email,
                "password": this.state.password
            }

            const requestOptions = {
                method: 'GET',
                headers: {'Accept': 'application/json',"Content-Type": "application/json"}
            };

            console.log("Données : " + JSON.stringify(dataToSend));
            fetch("http://localhost:3000/users/login/" + this.state.email + "/" + this.state.password, requestOptions)
            .then(response => 
                response.json())
            .then(response => {
                console.log( 'resultat --- ' + JSON.stringify(response));
                toastr.info("Welcome back !");
                this.setToken(response.token);
                this.setIdUser(response.idMongo);
                this.setPseudoUser(response.pseudo);
                this.props.history.push("./profil");
            }).catch((error) => {
                toastr.error('Your email or password is not correct');
            });
            
        }
            
    }

	render(){
   
        console.log("value of createAccount "  + this.state.createAccount);
        let firstname = (<input style={styles.input} type="text" placeholder="Prénom" pattern="[A-Za-z]+" title="Uniquement des lettres" onBlur={event => this.setFirstname(event)} onChange={event => this.setFirstname(event)} value={this.state.firstname} required></input>);
        let lastname = (<input style={styles.input} type="text" placeholder="Nom"  pattern="[A-Za-z]+" title="Uniquement des lettres" onBlur={event => this.setLastname(event)} onChange={event => this.setLastname(event)} value={this.state.lastname} required></input>);
        let pseudo = (<input style={styles.input} type="text" placeholder="Pseudo" pattern="[A-Za-z0-9]+" title="Pas de chiffre ou caractères spéciaux" onBlur={event => this.setPseudo(event)} onChange={event => this.setPseudo(event)} value={this.state.pseudo} required></input>);
        let email = (<input style={styles.input} type="email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onBlur={event => this.setEmail(event)} onChange={event => this.setEmail(event)} value={this.state.email} required></input>);
        let password = (<input style={styles.input} type="password" placeholder="Mot de passe" pattern="([a-zA-Z0-9!+.&%#é@]+)" onChange={event => this.setPassword(event)} value={this.state.password} required></input>);
        let birthday = (<input style={styles.input} type="date" placeholder="01/01/1995" onChange={event => this.setBirthday(event)} value={this.state.birthday} required></input>);

        let createAccount =  (
            <Container>
                {firstname}
                {lastname}
                {pseudo}
                {email}
                {password}
                {birthday}
            </Container>
        );

        let validator = (
            <Container>
                <button style={styles.bouton} onClick={(e) => this.validate(e)}>Suivant</button>
            </Container>
        );

        let signIn = (
            <Container>
                {email}
                {password}
            </Container>
        ) ;

        let signTitle =  this.state.createAccount ? (<Col style={styles.link} onClick={(e) => this.setSignTitle()}>Vous avez déjà un compte ? Se connecter</Col>) : (<Col style={styles.link} onClick={()=>this.setSignTitle()}>Vous n'avez pas de compte ? Creer un compte</Col>) ;
        let groupView = this.state.createAccount ? createAccount : signIn;

		return(
            <Container style={styles.form}>
                <form action="javascript:void(0);" >
                    <Row>{groupView}</Row>
                    <Row>{validator}</Row>
                    <Row>{signTitle}</Row>
                </form>
            </Container>  
		)
	}
}


export default Radium(SignUp);