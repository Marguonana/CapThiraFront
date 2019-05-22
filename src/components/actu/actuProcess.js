const actuService = require('./actuService');

module.exports = {
    getNewsProcess: (userPseudo) => {
        if (!userPseudo){
            console.log('Error: Empty request');
            return false;
        }
        return new Promise((resolve, reject)=>{
            actuService.findUserService(userPseudo).then((result)=> {
                if (!result || result.user.length < 1){
                    return reject();
                }
                return resolve({"result" : result, "show" : true});
                // flag pour display popin avec logo de la personne + bouton s'abonner
            });
        });

    }
}