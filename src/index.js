
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter,Route } from 'react-router-dom';
import {browserHistory } from 'react-router';
import CoverComp from './components/cover/CoverComp';
import AlbumComp from './components/album/AlbumComp';
import SignUp from './components/signUp/SignupComp';
import ActuComp from './components/actu/actuComp';
import toastr from 'reactjs-toastr';
import 'reactjs-toastr/lib/toast.css';

const Root = () => {
    return (
        <BrowserRouter history={browserHistory}>
        <div>
            <Route exact path={"/connexion"} component={SignUp}/>
            <Route exact path={"/profil"} component={AlbumComp} />
            <Route exact path={"/trend"} component={ActuComp} />
        </div>
        </BrowserRouter>
    )
}


const Path_URL = {
    SHOW_ALL_USER: "http://localhost:3000/users/showallusers/",
    SUBSCRIBE: "http://localhost:3000/users/subscribe/",
    LOG_IN: "http://localhost:3000/users/login/",
    CREATE_ACCOUNT: "http://localhost:3000/users/post/",

}
console.log("test app for nana");
render( <Root />, document.getElementById('react-app')
        
);
