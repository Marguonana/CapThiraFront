const coverService = require('./coverService');

module.exports = {
    findUserProcess: (userPseudo) => {
        if (!userPseudo){
            console.log('Error: Empty request');
            return false;
        }
        return new Promise((resolve, reject)=>{
            coverService.findUserService(userPseudo).then((result)=> {
                if (!result || result.user.length < 1){
                    return reject();
                }
                return resolve({"result" : result, "show" : true});
                // flag pour display popin avec logo de la personne + bouton s'abonner
            });
        });

    },

    subscribeProcess: (infoSubscriber) => {
        return new Promise((resolve,reject) => {           
            coverService.subscribeService(infoSubscriber)
            .then( result => {
                if (!result || result.length < 1)
                    reject();
                resolve(result); });
        });
       
    }
}