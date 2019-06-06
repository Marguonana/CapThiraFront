export function getStyles() {
    const profilStandard = require("../../images/profilStandard.png");
    return {

        navandbody: {
            display: "flex",
            justifyContent: "space-between",
        },
        colStyle: {
            height: 'auto',
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '50%',
            minWidth: "500px",
            minHeight:"500px",
            marginBottom: '3%',
        },
        description: {
            fontFamily: 'Bookman Old Style',
            backgroundColor: '#f3f3f3',
            paddingTop: '3%',
            paddingLeft: '25px',
            width: '500px',
            marginTop: '3%'

        },
        icons: {
            fontFamily: 'Bookman Old Style',
            backgroundColor: '#f3f3f3',
            width: '500px',
            paddingTop: '5px',
            width: '500px',
            paddingBottom: '5px',
            
        },
        iconComment: {
            position: 'relative',
            left: '420px',
            cursor: 'pointer'
        },
        iconLike: {
            position: 'relative',
            left: '440px',
            cursor: 'pointer'
        },
        iconProfil: {
            width: "40px",
            height: "40px",
            background: "url("+profilStandard+") no-repeat",
            backgroundSize: "40px"
        },
        imageStyle : {
            borderLeft: '25px solid #f3f3f3',
            borderRight: '25px solid #f3f3f3',
            borderTop: '25px solid #f3f3f3',
        },
        mainPost : {
            paddingTop: '60px',
            marginLeft:'300px',
            marginRight: 'auto',
            width: '95%',
            opacity:" .99"
        },
        date : {
            fontSize: '8px',
            marginBottom: '3%',
            textAlign: 'right'
        },

    };
}
