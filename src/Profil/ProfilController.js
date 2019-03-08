supprimerImage = (e, el) => {
    const requestOptions = {
      method: 'DELETE'
    };
  
    fetch("http://localhost:3000/images/supprimer/" + el._id, requestOptions).then((response) => {
      
    }).then((result) => {
      console.log(result);
      toastr.info('Photo supprimé avec succès','',{displayDuration:200});
      render();
    }).catch((error) => {
      console.error('Erreur d\'envoie des params','',{displayDuration:200});
    
    });
}

/** Recuperation */

encodeImg = (res) => {
    // console.log(res)
    for(var i = 0; i < res.length; i++){
        if (res[i].img.data){
            var prefix = "data:image/jpeg;base64,"; // Prefix par default
            /**
             * Gestion du prefix. 
             */
            var img = new Buffer(res[i].img.data, "binary").toString("base64");
            if (img.substr(0, "dataimage/jpegbase64".length).includes("jpeg")){
                prefix = "data:image/jpeg;base64,";
                img = img.substr("dataimage/jpegbase64".length, img.length);
            }else{
                prefix = "data:image/png;base64,";
                console.log(img)
                img = img.substr("dataimage/pngbase64".length, img.length+2);
            }
            var dataUri = prefix + img;
            res[i].img.data = dataUri;
        }
    } 
    this.setState({album: res});
    // console.log(this.state);
    
}