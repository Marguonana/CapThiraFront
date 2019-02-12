import React from 'react';
import { Container, Row, Col } from 'reactstrap';

class DisplayPhotoComp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            img: [
                {title:"Ma premiere image"},
                {title: "Ma seconde image"},
                {title: "Third img"}
            ]
        }
    }

    render = function(){
            var colImage = this.state.img.map(function(el){
                return (
                <Col  style={{height:200 +'px', weight:200 + 'px'}} >
                    <img src="https://www.freeiconspng.com/uploads/instagram-photo-camera-logo-outline-icons--free-download-14.jpg" alt="" style={{height:160 +'px', weight:160 + 'px'}}/>
                    <div className="titre-image">
                        <h4><i href="#">{el.title}</i></h4>
                    </div>
                    <div className="post-hover text-center">
                        <div className="inside">
                            <i className="fa fa-plus"></i>
                            <span className="date">25 Jan 2084</span>
                            <h4><a href="#">Title one goes here</a></h4>
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