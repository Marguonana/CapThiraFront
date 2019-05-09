const PREFIX_JPEG = "data:image/jpeg;base64,";
const PREFIX_PNG = "data:image/png;base64,";
const albumService = require('./albumService');

module.exports = {

    savePhotoProcess: (photo) =>{
        if (!photo)
            return 'Error with selected img. Please try again';
        if (photo.taille > 2000000 )
            return 'The size must be less than 2MO';
        albumService.savePhoto(photo).then(
            console.log("photoAjoute")
        );
        
        
    },

    encodeImg : (res) => {
        console.log(res);
        var listeImages = JSON.parse(res.imgs);    
        for(var i = 0; i < listeImages.length; i++){
            var img = _arrayBufferToBase64(listeImages[i].img.data);
                if (img.substr(0,20).includes("jpeg")){
                    img = img.substr(20, img.length); // 20 : longueur de l'entete du type
                    var dataUri = PREFIX_JPEG + img;
                }else{
                    img = img.substr(19, img.length); // 19 : longueur de l'entete du type
                    var dataUri = PREFIX_JPEG + img;
                }
                // console.log(dataUri)
                listeImages[i].img.data = dataUri;
                
        } 
        return(listeImages);
        
    }
}



/**
 * Function 
 * Pour encoder les images
 */
_arrayBufferToBase64 = ( buffer ) => {
    console.log(JSON.stringify(buffer))
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    return btoa( binary );
}
