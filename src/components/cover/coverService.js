
module.exports = {
    findUserService: (userPseudo) => {
        const myHeaders = new Headers();
        return new Promise((resolve)=>{
        fetch(new Request('http://localhost:3000/users/showallusers/' + userPseudo, {
            method: 'GET',
            cache: 'default',
          }),myHeaders)
        .then((resultat) =>  resultat.json())
        .then(resultat => resolve((resultat)))
        .catch( (err) => new PromiseRejectionEvent(false))
        });
    },

    subscribeService: (infoSubscriber) => {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(infoSubscriber),
            headers: {"Content-Type": "application/json"}
          };
          fetch('http://localhost:3000/users/subscribe/', requestOptions).then((response) => {
            if (response.status === 200){
              toastr.info("New friend !");
            }
            response.json();
          })
    }
}