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

    

    getStyles() {
        return {
          deleteButton: {
            position: "absolute",
            right: "10px",
            color: 'black',
            ":hover": {
              color: 'red',
              cursor: "pointer"
            }
          },
          colStyle: {
            height: 'auto',
            width: '20%',
            maxWidth: '20%',
            marginRight: '5%'

            },
            imageStyle : {
                height: '150px',
                width: '150px'
            },
            mainPost : {
                marginTop: '2%',
                paddingTop: '10px',
                marginLeft:'auto',
                marginRight: 'auto',
                width: '95%',
                backgroundColor: '#F2F2F1',
                // boxShadow: '5px -2px 5px 5px #eee'
                border: '1px solid grey'


            },
            ajouterPhoto : {
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '3%'
            },

           };
      }

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

    componentDidMount(){
        this.getPhoto();        
    }

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
{/* <i className="fa fa-plus"></i> */}

export default Radium(DisplayPhotoComp);