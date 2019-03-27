import React from 'react';
import toastr from 'reactjs-toastr';
import 'reactjs-toastr/lib/toast.css';
import Radium from 'radium';
import { getStyles } from './albumStyle'

import { Container, Row, Col } from 'reactstrap';
require('moment');



class AlbumComp extends React.Component{
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
            ],
            selectedFile: null,
            idUser : localStorage.getItem("id_user")
        };
        
        console.log("album")
    }

   
    /** -------------------- GET */
    encodeImg(res){
        var listeImages = JSON.parse(res.imgs);
        
        for(var i = 0; i < listeImages.length; i++){
            var img = this._arrayBufferToBase64(listeImages[i].img.data);
                var prefix = "data:image/jpeg;base64,"; // Prefix par defaut
                // Gestion du prefix. 
               // var img = new Buffer(listeImages[i].img.data, "binary").toString("base64");
                if (img.substr(0, "dataimage/jpegbase64".length).includes("jpeg")){
                    prefix = "data:image/jpeg;base64,";
                    img = img.substr("dataimage/jpegbase64".length, img.length);
                }else{
                    prefix = "data:image/png;base64,";
                    img = img.substr("dataimage/pngbase64".length, img.length);
                }
                var dataUri = prefix + img;
                console.log(dataUri)
                listeImages[i].img.data = dataUri;
                
        } 
        this.setState({album: listeImages});
         console.log(this.state);
        
    }

     _arrayBufferToBase64( buffer ) {
        var binary = '';
        var bytes = new Uint8Array( buffer );
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode( bytes[ i ] );
        }
        return btoa( binary );
    }

    getPhoto(){
        var myHeaders = new Headers();
        fetch(new Request('http://localhost:3000/images/showallimages/' + this.state.idUser, {
            method: 'GET',
            cache: 'default'
          }),myHeaders)
        .then((resultat) =>  resultat.json())
        .then(resultat => this.encodeImg(resultat))
    }

    /** -------------- POST */

    savePhoto = (photo) => {
        console.log(photo)
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

    handleSelectedFile = event => {
        var imageToSend = event.target.files[0]; 
        var reader = new FileReader();
        reader.onload = () => {
            dataImg.img = reader.result;
            console.log(dataImg)
            this.savePhoto(dataImg)
        }
        if (imageToSend) {
            var dataImg = {img: null,titre:imageToSend.name.substr(0,imageToSend.name.length-4),datePublication: new Date(), idUser:localStorage.getItem('id_user'), taille: imageToSend.size };
            reader.readAsDataURL(imageToSend);
        }else{
            toastr.info('Aucun element n\'a été rajouté','',{displayDuration:200})
        }
       
      }
      
   /** ---------------- DELETE */

    handleClick = (e, el) => {
          const requestOptions = {
            method: 'DELETE'
          };
        
          fetch("http://localhost:3000/images/delete/" + el._id, requestOptions).then((response) => {
            response.json();
          }).then((result) => {
            console.log(result);
            window.location.reload();
          }).catch((error) => {
            console.error('Erreur d\'envoie des params','',{displayDuration:200});
          
          });
      }

      componentDidMount(){
        this.getPhoto();        
    }

    
    
    render = function(){
       
            const styles = getStyles();
            var album = Array.from(this.state.album);
            var colImage = album.map( (el,index) => {
                return ( 
                    <Col key={index} style={styles.colStyle} >
                        <i key={'delete_' + index} onClick={(e) => this.handleClick(e, el)} className="fa fa-times" style={styles.deleteButton}></i>
                        <img key={index + '_img'} src={el.img.data} alt="" style={styles.imageStyle} width="150px" height="150px"/>
                        <div className="titre-image">
                            <h4>{el.titre}</h4>
                        </div>
                        <div className="post-hover text-center">
                            <div className="inside">
                                <i style={styles.date}>{el.datePublication}</i>
                            </div>
                        </div>
                    </Col>
                )
            });
    
            return(
                <div style={styles.mainPost}>
                    <Container>
                        <Row>
                            <Row>{colImage}</Row>
                            <Row style={styles.ajouterPhoto}><form method="post" encType="multipart/form-data" action="">
                                    <label htmlFor="file" style={styles.labelButton}>Ajouter une image</label>
                                    <input id="file" style={styles.button} type='file' accept='image/png,image/jpeg' name='ajouter' onChange={this.handleSelectedFile}></input>
                                </form>
                            </Row>
                        </Row>
                        
                    </Container>
                </div>
            )
        }

}


export default Radium(AlbumComp);