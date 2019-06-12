const toastr = require('reactjs-toastr');

module.exports = {
    
    findUserService: (myPseudo) => {
        return new Promise((resolve, reject)=>{
            fetch(new Request('http://localhost:3000/images/showallimagessubscriptions/' + myPseudo, {
                method: 'GET',
                cache: 'default',
              }))
            .then((resultat) =>  resultat.json())
            .then(resultat => resolve((resultat)))
            .catch(err => reject())
        });
    },

    likeService: (data) => {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json"}
          };
          fetch("http://localhost:3000/images/like/", requestOptions).then((response) => {
            response.json();
          }).then((result) => {
          }).catch((error) => {
            toastr.error("Error : Failed while adding like !");
          });
        },
}