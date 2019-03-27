import React from 'react';
import {Browser, Match, Miss } from 'react-router';
import CoverComp from './cover/CoverComp';
import AlbumComp from './album/AlbumComp';
import MenuComponent from './menu/MenuComponent';
 import SignUp from './signUp/SignUpComp';


 const Root = () => {

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