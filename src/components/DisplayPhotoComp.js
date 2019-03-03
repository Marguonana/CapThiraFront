import React from 'react';
import toastr from 'reactjs-toastr';
import 'reactjs-toastr/lib/toast.css';
import Radium from 'radium';
require('underscore');

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
            ],
            selectedFile: null
        };
        
        
    }

    /** ---------------------- STYLE */

    getStyles() {
        return {
          deleteButton: {
            position: "absolute",
            color: "rgb(204, 86, 86)",
            ":hover": {
              color: 'red',
              cursor: "pointer",
              transform: 'scale(2)'
            }
          },
          colStyle: {
            height: 'auto',
            width: '20%',
            maxWidth: '20%',
            minWidth: "150px",
            minHeight:"150px",
            marginRight: '5%',
            marginBottom: '3%'

            },
            imageStyle : {
                // height: '150px',
                // width: '150px',
                border: '10px solid white',
                marginBottom: '4%'
            },
            mainPost : {
                marginTop: '2%',
                paddingTop: '10px',
                marginLeft:'auto',
                marginRight: 'auto',
                width: '95%',
                // boxShadow: '5px -2px 5px 5px #eee'


            },
            ajouterPhoto : {
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '3%'
            },
            button : {
                display: 'none'
            },
            labelButton : {
                cursor: 'pointer',
                color: '#00b1ca',
                fontWeight: 'bold',
                ':hover' : {
                    color: '#25a5c4'
                }
            },
            date : {
                fontSize: '8px',
                marginBottom: '3%',
                textAlign: 'right'
            }
            

           };
      }

    /** -------------------- GET */
    encodeImg(res){
        // console.log(res)
        for(var i = 0; i < res.length; i++){
            if (res[i].img.data){
                var prefix = "data:image/jpeg;base64,"; // Prefix par default
                /**
                 * Gestion du prefix. 
                 */
                var img = new Buffer(res[i].img.data, "binary").toString("base64");
                if (img.substr(0, "dataimage/jpegbase64".length).includes("jpeg")){
                    prefix = "data:image/jpeg;base64,";
                    img = img.substr("dataimage/jpegbase64".length, img.length);
                }else{
                    prefix = "data:image/png;base64,";
                    console.log(img)
                    img = img.substr("dataimage/pngbase64".length, img.length+2);
                }
                var dataUri = prefix + img;
                res[i].img.data = dataUri;
            }
        } 
        this.setState({album: res});
        // console.log(this.state);
        
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

    /** -------------- POST */

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

    handleSelectedFile = event => {
        var imageToSend = event.target.files[0]; 
        var reader = new FileReader();
        reader.onload = () => {
            dataImg.img = reader.result;
            console.log(dataImg)
            this.savePhoto(dataImg)
        }
        if (imageToSend) {
            console.log(imageToSend);
            var dataImg = {img: null,titre:imageToSend.name.substr(0,imageToSend.name.length-4),datePublication: new Date(), idUser:1, taille: imageToSend.size };
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
        
          fetch("http://localhost:3000/images/supprimer/" + el._id, requestOptions).then((response) => {
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
       
            const styles = this.getStyles();
            var colImage = this.state.album.map( (el,index) => {
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
{/* <i className="fa fa-plus"></i> */}

export default Radium(DisplayPhotoComp);