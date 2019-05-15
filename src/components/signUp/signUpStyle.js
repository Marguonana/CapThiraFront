export function getStyles(){
    return {
        root: {
            backgoundColor : "rgb(33,37,41)",
	        fontSize: "16px"
        },
        form: {
            backgroundColor: "#fff",
            width: "320px",
            marginTop: "200px",
            textAlign: "center",
            padding: "40px 0 40px 0",
            borderRadius: "6px",
            boxShadow: "1px 1px #d7dfea"

        },
        bouton: {
            width: "260px",
            height: "42px",
            margin: "26px 0px 0px",
            border : "none",
            borderRadius : "25px",
            color : "#fff",
            backgroundColor :"#007bff",
            ":hover" : {
                backgroundColor: "#0062cc"

            }
        },
        input: {
            width: "260px",
            height: "42px",
            marginBottom: "16px",
            padding: "12px",
            backgroundColor: "#f0f2f5",
            border: "none",
            borderBottom: "1px solid #d7dfea"
        },
        link: {
            marginTop: "12px",
            fontSize: "12px",
            height: "18px",
            color: "#17a2b8",
            cursor : "pointer"
        }
    }
}