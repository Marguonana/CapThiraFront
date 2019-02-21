import React from 'react';
import toastr from 'reactjs-toastr';
import 'reactjs-toastr/lib/toast.css';
import Radium from 'radium';
require('underscore');
require('../lib/style.js');

import { Container, Row, Col } from 'reactstrap';
class DisplayPhotoComp extends React.Component{
    constructor(props){
        super(props)
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
                }},
                {title: "Enième img",img:{
                    data: "http://www.rangerwoodperiyar.com/images/joomlart/demo/default.jpg"
                }},
                {title: "Enième img",img:{
                    data: "http://www.rangerwoodperiyar.com/images/joomlart/demo/default.jpg"
                }},
                {title: "Enième img",img:{
                    data: "http://www.rangerwoodperiyar.com/images/joomlart/demo/default.jpg"
                }},
                {title: "Enième img",img:{
                    data: "http://www.rangerwoodperiyar.com/images/joomlart/demo/default.jpg"
                }},
                {title: "Enième img",img:{
                    data: "http://www.rangerwoodperiyar.com/images/joomlart/demo/default.jpg"
                }}
            ]
        }
    }

    /** ---------------- POST */

    
    handleClick = (e, el) => {
        const requestOptions = {
          method: 'DELETE'
        };
      
        fetch("http://localhost:3000/images/supprimer/" + el._id, requestOptions).then((response) => {
          response.json();
        }).then((result) => {
          console.log(result);
          window.location.reload();
        }).catch((error) => {
          console.error('Erreur d\'envoie des params','',{displayDuration:200});
        
        });
    }

    
    savePhoto = (photo) => {
        const requestOptions = {
          method: 'POST',
          body: JSON.stringify(photo),
          headers: {"Content-Type": "application/json"}
        };
        console.log(photo.taille)
        fetch("http://localhost:3000/images/post/", requestOptions).then((response) => {
          response.json();
        }).then((result) => {
          console.log(result);
          toastr.info('Photo ajouté avec succès');
          window.location.reload();
        }).catch((error) => {
          toastr.error('Erreur d\'envoie des params');
        });
    }


   /** ------------------GET  */

    encodeImg(res){
        // console.log(res)
        for(var i = 0; i < res.length; i++){
            if (res[i].img.data){
                var prefix = "data:image/jpeg;base64,"; // Prefix par defaut
                // Gestion du prefix. 
                var img = new Buffer(res[i].img.data, "binary").toString("base64");
                if (img.substr(0, "dataimage/jpegbase64".length).includes("jpeg")){
                    img = img.substr("dataimage/jpegbase64".length, img.length);
                }else{
                    prefix = "data:image/png;base64,";
                    img = img.substr("dataimage/pngbase64".length, img.length);
                }
                var dataUri = prefix + img;
                res[i].img.data = dataUri;
            }
        } 
        this.setState({album: res});
        
    }

    getPhoto(){
        var myHeaders = new Headers();
        fetch(new Request('http://localhost:3000/images/', {
            method: 'GET',
            cache: 'default'
          }),myHeaders)
        .then((resultat) =>  resultat.json())
        .then(resultat => this.encodeImg(resultat))
        if (this.state.data)
            this.setState.hasImg = true;
    }

    componentDidMount(){
        this.getPhoto();        
    }
    
    render = function(){
       
        const styles = this.getStyles();
        var colImage = this.state.album.map( (el,index) => {
            return ( 
                <Col key={index} style={styles.colStyle} >
                <img key={index + '_img'} src={el.img.data} alt="" style={styles.imageStyle}/>
                <div className="titre-image">
                    <h4>{el.titre}<i key={'delete_' + index} onClick={(e) => this.handleClick(e, el)} className="fa fa-times" style={styles.deleteButton}></i></h4>
                </div>
                <div className="post-hover text-center">
                    <div className="inside">
                        <span className="date">{el.datePublication}</span>
                    </div>
                </div>
            </Col>
            )
        });

        return(
            <div className="main-posts" style={styles.mainPost}>
                <Container>
                    <Row>
                        <Row>{colImage}</Row>
                        <Row><form method="post" encType="multipart/form-data" action="" style={styles.ajouterPhoto}>
                                <input style={styles.button} type='file' accept='image/png,image/jpeg' name='ajouter' onChange={this.handleSelectedFile}></input>
                            </form>
                        </Row>
                    </Row>
                    
                </Container>
            </div>
        )
    

    }

}

export default Radium(DisplayPhotoComp);