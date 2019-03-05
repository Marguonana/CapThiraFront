const imageEmail = require('../../images/icon-email.png');
const imagePassword = require('../../images/icon-password.png');
const imagePerson = require('../../images/icon-person.png');
const imageBirthday = require("../../images/birthday-icon.png");
const imageHeader = require("../../images/alps-background.jpg");

export function getStyles(){
    return {

        form : {
            backgroundColor: "#fff",
            color: "#222",
            marginLeft: "auto",
            marginRight: "auto",
            width: "25%",
            height: "70%",
            padding : '0px',
            marginTop: "10%",
            borderRadius: "50px 20px"
        },
        header : {
            background: "url("+imageHeader+") no-repeat",
            opacity: "0.5",
            height: "30%",
            backgroundSize : "100% 100%",
            borderRadius: "50px 20px 0px 0px",
            paddingRight : "0px",
            paddingLeft: "0px !important"
        },
        pseudo : {
            background: "url("+imagePerson+") no-repeat scroll",
            backgroundSize: '20px 20px',
            paddingLeft:'30px',
            border: "0px",
            borderBottom: "1px solid black",
            marginBottom: "5%",
            marginLeft: "auto",
            marginRight: "auto",
        },
        email : {
            background: "url("+imageEmail+") no-repeat scroll",
            backgroundSize: '20px 20px',
            paddingLeft:'30px',
            border: "0px",
            borderBottom: "1px solid black",
            marginBottom: "5%",
            marginLeft: "auto",
            marginRight: "auto",
        },
        password : {
            background: "url("+imagePassword+") no-repeat scroll",
            backgroundSize: '20px 20px',
            paddingLeft:'30px',
            border: "0px",
            borderBottom: "1px solid black",
            marginBottom: "5%",
            marginLeft: "auto",
            marginRight: "auto",
        },
        birthday : {
            background: "url("+imageBirthday+") no-repeat scroll",
            backgroundSize: '20px 20px',
            paddingLeft:'30px',
            border: "0px",
            borderBottom: "1px solid black",
            marginBottom: "5%",
            marginLeft: "auto",
            marginRight: "auto",

        }
    }
}