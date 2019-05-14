
module.exports = {
    findUserService: (userPseudo) => {
        var myHeaders = new Headers();
        return new Promise((resolve)=>{
        fetch(new Request('http://localhost:3000/users/showallusers/' + userPseudo, {
            method: 'GET',
            cache: 'default',
          }),myHeaders)
        .then((resultat) =>  resultat.json())
        .then(resultat => resolve((resultat)))
        });
    }
}