export function getStyles() {
    return {
      deleteButton: {
        position: "absolute",
        color: "rgb(204, 86, 86)",
        ":hover": {
          color: 'red',
          cursor: "pointer",
          transform: 'scale(2)'
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
            // height: '150px',
            // width: '150px',
            border: '10px solid white',
            marginBottom: '4%'
        },
        mainPost : {
            marginTop: '2%',
            paddingTop: '10px',
            marginLeft:'auto',
            marginRight: 'auto',
            width: '95%',
            // boxShadow: '5px -2px 5px 5px #eee'


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
            color: '#00b1ca',
            fontWeight: 'bold',
            ':hover' : {
                color: '#25a5c4'
            }
        },
        date : {
            fontSize: '8px',
            marginBottom: '3%',
            textAlign: 'right'
        }
        

       };
  }
