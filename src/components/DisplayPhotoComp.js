import React from 'react';

class DisplayPhotoComp extends React.Component{

    render(){
        return(
            <div className="main-posts">
                <div className="container">
                    <div className="row">
                        <div className="blog-masonry masonry-true isotope" >
                            <div className="post-masonry col-md-4 col-sm-6 isotope-item" >
                                <div className="post-thumb">
                                    <img src="https://www.freeiconspng.com/uploads/instagram-photo-camera-logo-outline-icons--free-download-14.jpg" alt="" />
                                    <div className="titre-image">
                                        <h4><a href="#">Title one goes here</a></h4>
                                    </div>
                                    <div className="post-hover text-center">
                                        <div className="inside">
                                            <i className="fa fa-plus"></i>
                                            <span className="date">25 Jan 2084</span>
                                            <h4><a href="#">Title one goes here</a></h4>
                                            <p>Cum sociis natoque penatibus et magnis dis parturient</p>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DisplayPhotoComp;