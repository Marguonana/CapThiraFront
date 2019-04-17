export function getStyles() {
    return {



        header: {
            height: "54px",
            boxShadow: "2px 4px 10px #cccccc",
            color: "#202124",
            display: "flex",
            overflow: "hidden",
            zIndex: "4",
            width: "100%",
            background: "#fff",
            textAlign: "center",
            fontFamily: "Roboto",
            paddingLeft: "300px",
            overflow: 'hidden',
            position: 'fixed'
        },
        search: {
            
            background: "#f2f2f2",
            fontFamily: "Open Sans",
            width: "100%",
            position: "relative",
            display: "flex"
        },

        searchTerm: {
            marginLeft: 'auto',
            width: "150px",
            border: "1px solid #007bff",
            borderRight: "none", 
            marginTop: '5px',
            padding: "5px",
            height: "30px",
            borderRadius: "5px 0 0 5px",
            outline: "none",
            color: "#007bff",
            ":focus":{
                color: "#007bff"
            }

        },

        searchButton: {

            width: "40px",
            height: "30px",
            marginTop: '5px',
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
        }
    };
};