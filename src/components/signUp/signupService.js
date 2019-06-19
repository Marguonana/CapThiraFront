module.exports = {

    createAccount: (data) => {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json"}
          };
        return new Promise((resolve, reject)=>{
            fetch("http://localhost:3000/users/post/", requestOptions).then((response,reject) => {
                response.json();
              }).then((result) => {
                //console.log(result);
                resolve("OK");
              }).catch((error) => {
                reject("KO");           
            });
        });

    },

    connexion: (data) => {
        const requestOptions = {
            method: 'GET',
            headers: {'Accept': 'application/json',"Content-Type": "application/json"}
        };
        return new Promise((resolve, reject)=>{
           // console.log("Données : " + JSON.stringify(dataToSend));
            fetch("http://localhost:3000/users/login/" + data.username + "/" + data.password, requestOptions)
            .then(response => 
                response.json())
            .then(response => {
                resolve(response);
            }).catch((error) => {
                reject("KO");
            });
        });
    }
}
