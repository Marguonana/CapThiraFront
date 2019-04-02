export function getStyles() {
    return {

        navandbody: {
            display: "flex",
            justifyContent: "space-between"
        },
      deleteButton: {
        position: "absolute",
        color: "#9a9a9a",
        borderRadius: "5px",
        padding: "5px",
        left: "145",
        ":hover": {
            transitionProperty: "background-color",
            transitionDuration: ".5s",
            transitionTimingFunction: "ease-in",
            backgroundColor: '#e0e0e0',
            cursor: "pointer",
        }
      },
      colStyle: {
        height: 'auto',
        width: '20%',
        maxWidth: '20%',
        minWidth: "150px",
        minHeight:"150px",
        marginRight: '5%',
        marginBottom: '3%'

        },
        imageStyle : {
            border: '25px solid #f3f3f3',
            marginBottom: '4%'
        },
        mainPost : {
            marginTop: '2%',
            paddingTop: '10px',
            marginLeft:'auto',
            marginRight: 'auto',
            width: '95%',



        },
        ajouterPhoto : {
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '3%'
        },
        button : {
            display: 'none'
        },
        labelButton : {
            cursor: 'pointer',
            width: "260px",
            height: "42px",
            margin: "26px 0px 0px",
            padding: "5px",
            border : "none",
            textAlign: "center",
            borderRadius : "25px",
            color : "#fff",
            backgroundColor :"#007bff",
            ":hover" : {
                backgroundColor: "#0062cc"

            }
        },
        date : {
            fontSize: '8px',
            marginBottom: '3%',
            textAlign: 'right'
        },

       };
  }
