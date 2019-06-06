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
    }
}