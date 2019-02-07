import React from 'react';
import "./rss/normalize.css"
import "./rss/font-awesome.css"
import "./rss/bootstrap.min.css"
import "./rss/templatemo-style.css"

export class SiteHeaderComp extends React.Component{
    render(){
        return(
            <div className="site-header clearfix">
                <div className="container">
                    <a href="https://templatemo.com/templates/templatemo_434_masonry/#" class="site-brand pull-left"><strong>CapThira, </strong>partagez vos photos</a>
                        <div className="social-icons pull-right">
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

        )
    }
}
