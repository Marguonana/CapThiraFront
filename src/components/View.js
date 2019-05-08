import React from 'react';
import CoverComp from './cover/CoverComp';
import AlbumComp from './album/AlbumComp';
import SignUp from './signUp/SignupComp';


class View extends React.Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }



   


    render(){
        return(
            <div>
                 <SignUp />  
            </div>
        )
    
    }
}

export default View;