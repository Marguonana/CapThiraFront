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
        
        console.log("inside album comp")
    }


    /** -------------- POST */

    handleSelectedFile = event => {
        var imageToSend = event.target.files[0]; 
        var reader = new FileReader();
        reader.onload = () => {
            dataImg.img = reader.result;
            console.log(dataImg);
            albumService.savePhoto(dataImg);
            window.location.reload();
           // this.props.history.push('./profil');
        }
        if (imageToSend) {
            var dataImg = { img: null, 
                            name: imageToSend.name, 
                            titre:imageToSend.name.substr(0,imageToSend.name.length-4),
                            datePublication: new Date(), 
                            idUser:localStorage.getItem('id_user'), 
                            pseudo: localStorage.getItem('pseudo_user'),
                            taille: imageToSend.size };
            reader.readAsDataURL(imageToSend);
        }else{
            toastr.info("Add process status : Failed !",'',{displayDuration:200})
        }
       
    }

    /*********** GET ************************* */
    componentDidMount(){
        albumService.getPhotos(this.state.idUser).then(objAlbum => {
            var result = objAlbum;
            var data = new Array(1);
            if (JSON.parse(result.imgs) && JSON.parse(result.imgs).length > 0){
                JSON.parse(result.imgs).forEach( (element,i) => {
                    data[i] = {
                        'titre': element.title,
                        'datePublication': element.datePublication,
                        'idUser': element.idUser,
                        'taille': element.size,
                        'key': element.key,
                        'img': {'data' : objAlbum.listUrl[i]} ,
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
        var colImage = album.map( (el,index) => {
            return ( 
                <Col key={index} style={styles.colStyle} >
                    <i key={'delete_' + index} onClick={(e) => albumService.deletePhoto(e, el)} className="fas fa-trash" style={styles.deleteButton}></i>
                    <img key={index + '_img'} src={ el.img ? el.img.data : ''} alt="" style={styles.imageStyle} width="150px" height="150px"/>
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
                                <label id="addImageLabel" htmlFor="file" style={styles.labelButton}>Ajouter une photo</label>
                                <input id="addImageButton" key="001" id="file" style={styles.button} type='file' accept='image/png,image/jpeg' name='ajouter' onChange={this.handleSelectedFile}></input>
                            </form>
                        </Row>
                    </Container>
                </div>
                
            </div>
        )
    }

}


export default Radium(AlbumComp);