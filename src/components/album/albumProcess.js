const PREFIX_JPEG = "data:image/jpeg;base64,";
const PREFIX_PNG = "data:image/png;base64,";

module.exports = {

    encodeImg : (res) => {
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
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    return btoa( binary );
}
