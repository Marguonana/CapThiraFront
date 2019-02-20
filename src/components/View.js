import React from 'react';
import CouvertureComp from './CouvertureComp';
import DisplayPhotoComp from './DisplayPhotoComp';

class View extends React.Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        return(
            <div>
                <CouvertureComp />
                <DisplayPhotoComp />
            </div>
        )
    
    }
}

export default View;