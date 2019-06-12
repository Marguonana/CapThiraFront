export function getStyles(){

    const logoCapthira = require("../../images/logo.png");

    return {
        nav: {
            width: "300px",
            height: "100%",
            paddingLeft: "0px",
            backgroundColor: "#fff",
            zIndex: "4",
            boxShadow: "1px 0px 0px #e8e8e8",
            overflow: 'hidden',
            position: 'fixed',
            minWidth: '150px'
        },
        item: {
            cursor: 'pointer',
            opacity: '0.75',
            fontSize: '20px',
            height: '40px',
            paddingLeft: '10px',
            width: '300px',
            minWidth: '150px',
            ':hover': {
                opacity: '1',
                backgroundImage : 'linear-gradient(to right, #007bffad 10px, #fbfbfb 10px)'
            }
        },
        welcome: {
            top: '500',
            marginLeft: '50px',
            width: '200px',
            fontFamily: "Gill Sans"
        },
        ul: {
            padding: '0px',
            top: '500'
        },
        logoContainer: {
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '200px',
            height: '200px',
            background: "url("+logoCapthira+") no-repeat",
            backgroundSize: '200px',
            top: '100'
        },
        toastr: {
            width: '300px',
            top: '0px',
            left: '0px',
            position: 'fixed',
            zIndex: '9999',
            color: '#3a87ad',
            padding: '8px 35px 8px 14px',
            marginBottom: '8px',
            textShadow: '0 1px 0 rgba(255, 255, 255, 0.5)',
            border: '2px solid',
            backgroundColor: '#d9edf71f',
            borderColor: '#bce8f100',
            borderRadius: '4px',
            ':hover' : {
                boxShadow: '#999 0 0 8px',
                cursor: 'pointer',
            }
        }


        
    }
}