import React from 'react';
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
            ]
        }
    }

    encodeImg(res){
        console.log(res)
        for(var i = 0; i < res.length; i++){
            if (res[i].img.data){
                var prefix = "data:image/jpeg;base64,"; // Prefix par default
                /**
                 * Gestion du prefix. 
                 */
                var img = new Buffer(res[i].img.data, "binary").toString("base64");
                if (img.substr(0, "dataimage/jpegbase64".length).includes("jpeg")){
                    prefix = "data:image/jpeg;base64,";
                }else{
                    prefix = "data:image/png;base64,";
                }
                img = img.substr("dataimage/jpegbase64".length, img.length);
                var dataUri = prefix + img;
                res[i].img.data = dataUri;
            }
        } 
        this.setState({album: res});
        console.log(this.state);
        
    }

    getPhoto(){
        var myHeaders = new Headers();
        fetch(new Request('http://localhost:3000/', {
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
            console.log(this.state.album)
            var colImage = this.state.album.map(function(el){
                return (
                <Col  style={{height:'auto', weight:20 + '%'}} >
                    <img src={el.img.data} alt="" style={{height:150+'px', weight:150 + 'px'}}/>
                    <div className="titre-image">
                        <h4><i href="#">{el.titre}</i></h4>
                    </div>
                    <div className="post-hover text-center">
                        <div className="inside">
                            <i className="fa fa-plus"></i>
                            <span className="date">{el.datePublication}</span>
                            <h4><a href="#">Titre d'un commentaire?</a></h4>
                            <p>Cum sociis natoque penatibus et magnis dis parturient</p>
                        </div>
                    </div>
                </Col>
                )
            });
    
            console.log(colImage);
    
            return(
                <div className="main-posts">
                    <Container>
                        <Row>{colImage}
                           
                        </Row>
                        <Row>
    
                        </Row>
                    </Container>
                </div>
            )
        

        }
    
}

export default DisplayPhotoComp;