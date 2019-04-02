

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter,Route } from 'react-router-dom';
import {browserHistory } from 'react-router';
import CoverComp from './components/cover/CoverComp';
import AlbumComp from './components/album/AlbumComp';
import MenuComponent from './components/menu/MenuComponent';
 import SignUp from './components/signUp/SignUpComp';


import View from './components/View';

const Root = () => {
    return (
        <BrowserRouter history={browserHistory}>
        <div>
            <Route exact path={"/connexion"} component={SignUp}/>
            <Route exact path={"/profil"} component={AlbumComp} />
        </div>
        </BrowserRouter>
    )
}

console.log("test app for nana");
render( <Root />, document.getElementById('react-app')
        
);
