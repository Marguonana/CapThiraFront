export function getStyles() {
    const profilStandard = require("../../images/profilStandard.png");
    return {

        header: {
            height: "54px",
            boxShadow: "2px 4px 10px #cccccc",
            color: "#202124",
            display: "flex",
            overflow: "hidden",
            zIndex: "4",
            width: "100%",
            background: "#f2f2f2",
            textAlign: "center",
            fontFamily: "Roboto",
            paddingLeft: "300px",
            overflow: 'hidden',
            position: 'fixed'
        },
        search: {
            fontFamily: "Open Sans",
            marginLeft: "auto",
            position: "relative",
            display: "flex"
        },

        searchTerm: {
            marginLeft: 'auto',
            width: "200px",
            border: "1px solid #007bff",
            borderRight: "none", 
            marginTop: '10px',
            padding: "5px",
            height: "30px",
            borderRadius: "5px 0 0 5px",
            outline: "none",
            ":focus": {
                border: "1px solid #0062cc",
            }

        },

        searchButton: {

            width: "40px",
            height: "30px",
            marginTop: '10px',
            marginRight: '30px',
            border: "1px solid #007bff",
            background: "#007bff",
            textAlign: "center",
            color: "#fff",
            borderRadius: "0 5px 5px 0",
            cursor: "pointer",
            fontSize: "20px",
            ":hover": {
                background:"#0062cc"
            }
        },


        resultBoard : {
            width: "300px",
            height: "200px",
            position: "absolute",
            top: "10px",
            left: "100px",
        },
        close: {
            position: "fixed",
            zIndex: "1",
            top: "250px",
            right: "405px"
        },
        resultSearch : {
            width: "450px",
            height: "200px",
            top: "250px",
            position: "fixed",
            right: "400px",
            backgroundColor: "white",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        },
        photoProfil: {
            top: "292px",
            right: "700px",
            position: "fixed",
            zIndex: "1",
            width: "80px",
            height: "80px",
            background: "url("+profilStandard+") no-repeat",
            backgroundSize: "80px"
        },
        pseudoStyle: {
            top: "314px",
            right: "517px",
            position: "fixed",
            zIndex: "1",
            fontFamily: "cursive",
            fontSize: "larger"
        },

        rectangle:{
            top: "397px",
            right: "463px",
            width: "100px",
            position: "fixed",
            height: "25px",
            background: "#88b7d5",
        },
        triangle: {
            top: "379px",
            right: "414px",
            position: "fixed",
            width: "0",
            height: "0",
            borderTop: "30px solid transparent",
            borderLeft: "50px solid rgb(136, 183, 213)",
            borderBottom: "30px solid transparent"
        }
    };
};