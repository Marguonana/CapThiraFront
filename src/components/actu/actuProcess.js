const actuService = require('./actuService');

module.exports = {
    getNewsProcess: (userPseudo) => {
        if (!userPseudo){
            console.log('Error: Empty request');
            return false;
        }
        return new Promise((resolve, reject)=>{
            actuService.findUserService(userPseudo).then((result)=> {
                if (!result || (result.listImgs && result.listImgs.length < 1) ){
                    return reject();
                }
                return resolve({"result" : result, "show" : true});
                // flag pour display popin avec logo de la personne + bouton s'abonner
            });
        });
    },
    addLikeProcess: (event, element) => {
        const data =  {
            pseudo: localStorage.getItem('pseudo_user'),
            idUser: localStorage.getItem('id_user'),
            idImage: element.idImage
        };
        if (!data.pseudo || !data.idUser || !data.idImage){
            console.log('Header error')
            return false;
        }
        actuService.likeService(data);
    }
}