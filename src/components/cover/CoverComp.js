import React from 'react';
import toastr from 'reactjs-toastr';
import 'reactjs-toastr/lib/toast.css';
import Radium from 'radium';
import { Container, Row, Col } from 'reactstrap';
import { getStyles } from './coverStyle'

const coverService = require('./coverService');
const coverProcess = require('./coverProcess');

class CoverComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hasImg: false,
            displayPopin : false,
            data: null
        }
    }  
    
    closePopin = (e) => {
        this.setState({displayPopin : false})
    }

    lookUp = (event) => {
        if ( !document.getElementById("searchText") && !document.getElementById("searchText").value){
            console.log("Saisie non valide");
            return false;
        }
        coverProcess.findUserProcess(document.getElementById("searchText").value)
        .then( 
            (retour) => {
                if(retour && retour.show){
                    this.setState({ data : retour.result})
                    this.setState({displayPopin : retour.show });
                    console.log(retour.result);
                }
        })
        .catch( err => { toastr.warning('This user doesn\'t exist') } )
    }

    /**
     * idUser : id de l'uilisateur qui va obtenir un abonné en plus
     */
    subscribe = (event) => {
        const info = 
                    {   "idSubscriber" : localStorage.getItem('id_user'),
                        "pseudoSubscriber" : localStorage.getItem('pseudo_user'),
                        "idSubscription" : this.state.data.user[0]._id,
                        "pseudoSubscription" : this.state.data.user[0].pseudo
                    };
        coverProcess.subscribeProcess(info)
            .then( result => {
                if (result === 200){
                    toastr.success('Subscription done with success');
                    setTimeout(function() {}, 3000);
                    window.location.assign("./trend");
                }else{
                    toastr.warning('Error: '+ result);
                }}
            )
            .catch( err => {
                toastr.error('Error while subscribe');
            })
        this.closePopin();
        // Redirection vers fil d'actu
    }
   
    
	render(){
        const styles = getStyles();
        let popin = (<div></div>);
        if (this.state.displayPopin){
            popin = (
                <div style={styles.resultBoard}>
                    <i style={styles.close} className="fas fa-times" onClick={(e) => this.closePopin(e)}></i>
                    <p style={styles.resultSearch}>Un utilisateur à été trouvé !</p>
                    <div style={styles.photoProfil}></div><span key="userFound1" style={styles.pseudoStyle}> {this.state.data ? this.state.data.user[0].pseudo : '' }</span>
                    <span key="rect1" style={styles.rectangle} onClick={(e) => this.subscribe(e)}>s'abonner</span><span key="tri1" style={styles.triangle}></span>
                 </div>
            );
        };
        return(
                <div style={styles.header}>

                    <div style={styles.search}>
                        <input id="searchText" type="text" style={styles.searchTerm} placeholder="Rechercher" />
                        <button id="searchButton" key="aa2" type="submit" style={styles.searchButton} onClick={(e) =>  this.lookUp(event) }>
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                    {popin}
                   
                </div>
		)
	}
}


export default Radium(CoverComp);
