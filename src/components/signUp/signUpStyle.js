const imageEmail = require('../../images/icon-email-white.png');
const imagePassword = require('../../images/icon-password-white.png');
const imagePerson = require('../../images/icon-person-white.png');
const imageBirthday = require("../../images/birthday-icon-white.png");
const imageHeader = require("../../images/alps-background.jpg");

export function getStyles(){
    return {

        form : {
            color: "white",
            marginLeft: "auto",
            marginRight: "auto",
            width: "35%",
            height: "70%",
            padding : '0px',
            marginTop: "10%",
            borderRadius: "50px 20px"
        },
        header : {
            marginBottom: '10%'
        },
        textConnexion : {
            whiteSpace: "nowrap",
            color: '#00b1ca',
            fontWeight: 'bold',
        },
        bottom : {
            background: "url("+imageHeader+") no-repeat",
            opacity: "0.5",
            height: "30%",
            backgroundSize : "100% 100%",
            marginTop: '5%',
            // borderRadius: "50px 20px 0px 0px",
            paddingRight : "0px",
            paddingLeft: "0px !important"
        },
        pseudo : {
            backgroundColor: "#000",
            backgroundImage: "url("+imagePerson+")",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll",
            backgroundSize: "20px 20px",
            paddingLeft:'30px',
            border: "0px",
            color: 'white',
            borderBottom: "1px solid white",
            marginBottom: "5%",
            marginLeft: "auto",
            marginRight: "auto",
        },
        email : {
            background: "url("+imageEmail+") no-repeat scroll",
            backgroundSize: "20px 20px",
            paddingLeft:'30px',
            border: "0px",
            color: 'white',
            borderBottom: "1px solid white",
            marginBottom: "5%",
            marginLeft: "auto",
            marginRight: "auto",
        },
        password : {
            background: "url("+imagePassword+") no-repeat scroll",
            backgroundSize: "20px 20px",
            paddingLeft:'30px',
            border: "0px",
            color: 'white',
            borderBottom: "1px solid white",
            marginBottom: "5%",
            marginLeft: "auto",
            marginRight: "auto",
        },
        birthday : {
            background: "url("+imageBirthday+") no-repeat scroll",
            backgroundSize: "20px 20px",
            paddingLeft:'30px',
            border: "0px",
            color:'white',
            borderBottom: "1px solid white",
            marginBottom: "5%",
            marginLeft: "auto",
            marginRight: "auto",

        },
        button : {
            cursor: 'pointer',
            backgroundColor: "#191818",
            borderColor: '#212627',
            color: '#00b1ca',
            fontWeight: 'bold',
            ':hover' : {
                color: '#25a5c4',
                backgroundColor: 'black',
               
            }
        }
    }
}