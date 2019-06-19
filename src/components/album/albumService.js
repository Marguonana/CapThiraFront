const toastr = require('reactjs-toastr');

module.exports = {

    getPhotos: (idUser) => {
        const myHeaders = new Headers();
        return new Promise((resolve)=>{
          fetch(new Request('http://localhost:3000/images/showallimages/' + idUser, {
              method: 'GET',
              cache: 'default',
            }),myHeaders)
          .then((resultat) =>  resultat.json())
          .then(resultat => resolve((resultat)))
        });
    },
    
    savePhoto: (photo) => {
        console.log(photo)
        const requestOptions = {
          method: 'POST',
          body: JSON.stringify(photo),
          headers: {"Content-Type": "application/json"}
        };
        console.log(photo.taille)
        return new Promise((resolve,reject)=> {
          fetch("http://localhost:3000/images/post/", requestOptions).then((response) => {
            if (response.status === 200){
                toastr.info("Adding with success !");
            }
              response.json();
          }).then((result) => {
            resolve();
          }).catch((error) => {
              toastr.error("Post status : Failed !");
              reject();
          });
        })
    },
    
    deletePhoto: (e, el) => {
        const requestOptions = {
          method: 'DELETE'
        };
        console.log(el)
        fetch("http://localhost:3000/images/delete/" + el.idUser + "/" + el.key, requestOptions).then((response) => {
          response.json();
        }).then((result) => {
        //   console.log(result);
          window.location.reload();
        }).catch((error) => {
          console.error("Error with request params while delete",'',{displayDuration:200});
        
        });
    }

}
