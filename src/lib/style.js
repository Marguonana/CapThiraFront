getStyles = () => {
    return {
      deleteButton: {
        position: "absolute",
        right: "10px",
        color: 'black',
        ":hover": {
          color: 'red',
          cursor: "pointer"
        }
      },
      colStyle: {
        height: 'auto',
        width: '20%',
        maxWidth: '20%',
        marginRight: '5%'

        },
        imageStyle : {
            height: '150px',
            width: '150px'
        },
        mainPost : {
            marginTop: '2%',
            paddingTop: '10px',
            marginLeft:'auto',
            marginRight: 'auto',
            width: '95%',
            backgroundColor: '#F2F2F1',
            // boxShadow: '5px -2px 5px 5px #eee'
            border: '1px solid grey'


        },
        ajouterPhoto : {
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '3%'
        },

       };
  }