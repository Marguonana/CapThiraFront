import React from 'react';
import toastr from 'reactjs-toastr';
import 'reactjs-toastr/lib/toast.css';
import Radium from 'radium';
import NavigationComponent from './../navigation/navigationComponent';
import CoverComp from './../cover/CoverComp';
import { getStyles } from './albumStyle';
import { Container, Row, Col } from 'reactstrap';
require('moment');

const albumService = require('./albumService');
const albumProcess = require('./albumProcess');


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
        
        console.log("inside album comp")
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
          if (result.status === 200){
            toastr.info("Adding with success !");
          window.location.reload();
          }
          
        }).catch((error) => {
          toastr.error("Post status : Failed !");
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
            toastr.info("Add process status : Failed !",'',{displayDuration:200})
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
            console.error("Error with request params while delete",'',{displayDuration:200});
          
          });
      }

      componentDidMount(){
       albumService.getPhotos(this.state.idUser).then(objAlbum => {
           this.setState({album : objAlbum})
       });
    }

    
    
    render = function(){
       
        const styles = getStyles();
        var colImage = this.state.album.map( (el,index) => {
            return ( 
                <Col key={index} style={styles.colStyle} >
                    <i key={'delete_' + index} onClick={(e) => this.handleClick(e, el)} className="fa fa-ellipsis-v" style={styles.deleteButton}></i>
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
            <div>
                <CoverComp />
                <div style={styles.navandbody}>
                    <NavigationComponent />
                    <Container style={styles.mainPost}>
                        <Row>
                            <Row>{colImage}</Row>
                            <Row style={styles.ajouterPhoto}>
                                <form method="post" encType="multipart/form-data" action="">
                                    <label htmlFor="file" style={styles.labelButton}>Ajouter une photo</label>
                                    <input key="001" id="file" style={styles.button} type='file' accept='image/png,image/jpeg' name='ajouter' onChange={this.handleSelectedFile}></input>
                                </form>
                            </Row>
                        </Row>
                    </Container>
                </div>
                
            </div>
        )
    }

}


export default Radium(AlbumComp);