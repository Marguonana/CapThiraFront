import React from 'react';
import toastr from 'reactjs-toastr';
import 'reactjs-toastr/lib/toast.css';
import Radium from 'radium';
import NavigationComponent from './../navigation/navigationComponent';
import CoverComp from './../cover/CoverComp';
import { getStyles } from './actuStyle';
import { Container, Row, Col } from 'reactstrap';

const moment = require('moment');
const actuService = require('./actuService');
const actuProcess = require('./actuProcess');


class ActuComp extends React.Component{
    constructor(props){
        super(props)
        // if(!localStorage.getItem("id_user")){
        //     window.location.assign('./connexion');
        // }
        this.state = {
            album: [
                {title:"Ma premiere image",img:{
                    data: "http://www.rangerwoodperiyar.com/images/joomlart/demo/default.jpg"
                }},
                {title: "Ma seconde image",img:{
                    data: "http://www.rangerwoodperiyar.com/images/joomlart/demo/default.jpg"
                }},
                {title: "third",img:{
                    data: "http://www.rangerwoodperiyar.com/images/joomlart/demo/default.jpg"
                }},
                {title: "Enième img",img:{
                    data: "http://www.rangerwoodperiyar.com/images/joomlart/demo/default.jpg"
                }}
            ],
            selectedFile: null,
            idUser : localStorage.getItem("id_user")
        };
        
        console.log("inside actu comp")
    }

    componentDidMount(){
        actuProcess.getNewsProcess(this.state.idUser).then(dataSubscription => {
            var data = new Array(1);
            if (dataSubscription.result && dataSubscription.result.listImgs && dataSubscription.result.listImgs.length > 0){
                dataSubscription.result.listImgs.forEach( (element,i) => {
                    data[i] = {
                        'titre': element.title,
                        'datePublication': element.datePublication,
                        'pseudo': element.pseudo,
                        'idUser': element.idUser,
                        'taille': element.size,
                        'key': element.key,
                        'img': {'data' : dataSubscription.result.listUrl[i]} ,
                    }
                });
                console.log(data)
                this.setState({album : data})
            }      

        });
    }

    
    
    render = function(){
       
        const styles = getStyles();
        var album = Array.from(this.state.album);
        album.sort(function(current, next){
            return new Date(next.datePublication) - new Date(current.datePublication);
        });
        var colImage = album.map( (el,index) => {
            return ( 
                <Col key={index} style={styles.colStyle} >
                    <div className="titre-image" style={styles.description}>
                        <i class="fa fa-user" aria-hidden="true"></i><span>{el.pseudo}</span>
                    </div>    
                    <img key={index + '_img'} src={ el.img ? el.img.data : ''} alt="" style={styles.imageStyle} width="500px" height="500px"/>
                    <div style={styles.icons}><i class="fa fa-comment" aria-hidden="true" style={styles.iconComment}></i><i className="fa fa-thumbs-up" aria-hidden="true" style={styles.iconLike}></i></div>
                    {/* <div className="titre-image">
                        <h4>{el.titre}</h4>
                    </div> */}
                </Col>
            )
        });

        return(
            <div>
                <CoverComp />
                <div style={styles.navandbody}>
                    <NavigationComponent />
                    <Container style={styles.mainPost}>
                        <Row>
                            {colImage}
                        </Row>
                    </Container>
                </div>
                
            </div>
        )
    }

}


export default Radium(ActuComp);