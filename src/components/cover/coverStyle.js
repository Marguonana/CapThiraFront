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
        }
    };
};