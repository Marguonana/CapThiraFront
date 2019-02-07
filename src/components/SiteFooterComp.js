import React from 'react';
import "./rss/normalize.css"
import "./rss/font-awesome.css"
import "./rss/bootstrap.min.css"
import "./rss/templatemo-style.css"

export class SiteFooterComp extends React.Component{
    render(){
        return(
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <div class="social-icons">
                            <ul>
                                <li><a href="https://templatemo.com/templates/templatemo_434_masonry/#" class="fa fa-facebook"></a></li>
                                <li><a href="https://templatemo.com/templates/templatemo_434_masonry/#" class="fa fa-twitter"></a></li>
                                <li><a href="https://templatemo.com/templates/templatemo_434_masonry/#" class="fa fa-behance"></a></li>
                                <li><a href="https://templatemo.com/templates/templatemo_434_masonry/#" class="fa fa-dribbble"></a></li>
                                <li><a href="https://templatemo.com/templates/templatemo_434_masonry/#" class="fa fa-google-plus"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 text-center">
                        <p class="copyright-text">Copyright © 2018 Jh1 EVRY MIAGE 
                        | Design: <a href="http://www.templatemo.com/" title="free mobile templates">template mo</a>
                        | Photos: <a href="http://unsplash.com/">Unsplash</a></p>
                    </div>
                </div>
            </div>
        )
    }
}
