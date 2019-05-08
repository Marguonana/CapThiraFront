module.exports = {

  getPhotos: (idUser) => {
    if (idUser){
      return new Promise((resolve)=>{
        fetch('../json/getPhoto.json')
        .then((resultat) =>  resultat.json())
        .then( (resultat) => resolve((resultat)) )
        .catch((err) => reject('Erreur'))
      });    
    }
  }

  

} 