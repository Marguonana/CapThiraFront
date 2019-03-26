import React from 'react';
import {Router, Route } from 'react-router-dom';
import CoverComp from './cover/CoverComp';
import AlbumComp from './album/AlbumComp';
import MenuComponent from './menu/MenuComponent';
 import SignUp from './signUp/SignUpComp';


 const Path = () => {
     
 }


class View extends React.Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }



   


    render(){
        return(
            <div>
                 {/* <MenuComponent />
                <CoverComp />
                <AlbumComp />   */}
                 <SignUp />  
            </div>
        )
    
    }
}

export default View;