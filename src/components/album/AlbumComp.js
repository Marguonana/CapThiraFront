import React from 'react';
import toastr from 'reactjs-toastr';
import 'reactjs-toastr/lib/toast.css';
import Radium from 'radium';
import NavigationComponent from './../navigation/navigationComponent';
import CoverComp from './../cover/CoverComp';
import { getStyles } from './albumStyle';
import { Container, Row, Col } from 'reactstrap';

const moment = require('moment');
const albumService = require('./albumService');
const albumProcess = require('./albumProcess');


class AlbumComp extends React.Component{
    constructor(props){
        super(props)
        if(!localStorage.getItem("id_user")){
            window.location.assign('./connexion');
        }
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
        
        console.log("inside album comp")
    }


    /** -------------- POST */

    handleSelectedFile = event => {
        var imageToSend = event.target.files[0]; 
        var reader = new FileReader();
        reader.onload = () => {
            dataImg.img = reader.result;
            // console.log(dataImg);
            albumService.savePhoto(dataImg);
        }
        if (imageToSend) {
            var dataImg = {img: null,titre:imageToSend.name.substr(0,imageToSend.name.length-4),datePublication: new Date(), idUser:localStorage.getItem('id_user'), taille: imageToSend.size };
            reader.readAsDataURL(imageToSend);
        }else{
            toastr.info("Add process status : Failed !",'',{displayDuration:200})
        }
       
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
                    <i key={'delete_' + index} onClick={(e) => albumService.deletePhoto(e, el)} className="fa fa-ellipsis-v" style={styles.deleteButton}></i>
                    <img key={index + '_img'} src={el.img.data} alt="" style={styles.imageStyle} width="150px" height="150px"/>
                    <div className="titre-image">
                        <h4>{el.titre}</h4>
                    </div>
                    <div className="post-hover text-center">
                        <div className="inside">
                            <i style={styles.date}>{moment(el.datePublication).fromNow()}</i>
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
                            {colImage}
                        </Row>
                        <Row style={styles.ajouterPhoto}>
                            <form style={styles.form}>
                                <label htmlFor="file" style={styles.labelButton}>Ajouter une photo</label>
                                <input key="001" id="file" style={styles.button} type='file' accept='image/png,image/jpeg' name='ajouter' onChange={this.handleSelectedFile}></input>
                            </form>
                        </Row>
                    </Container>
                </div>
                
            </div>
        )
    }

}


export default Radium(AlbumComp);