export function getStyles(){

    const logoCapthira = require("../../images/logo.png");

    return {
        nav: {
            width: "300px",
            height: "100%",
            paddingTop: "40px",
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


        
    }
}