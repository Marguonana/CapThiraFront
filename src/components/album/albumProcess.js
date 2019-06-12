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
        
        
    }
}
