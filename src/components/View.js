import React from 'react';
import CouvertureComp from './CouvertureComp';
import DisplayPhotoComp from './DisplayPhotoComp';
import MenuComponent from './menu/MenuComponent';

class View extends React.Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        return(
            <div>
                <MenuComponent />
                <CouvertureComp />
                <DisplayPhotoComp />
            </div>
        )
    
    }
}

export default View;