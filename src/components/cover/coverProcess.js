const coverService = require('./coverService');

module.exports = {
    findUserProcess: (userPseudo) => {
        if (!userPseudo)
            return 'Error: Empty request';
        coverService.findUserService(userPseudo).then((result)=> {
            if (!result){
                console.log("User not found");
                return false; 
            }
            return true;
            // flag pour display popin avec logo de la personne + bouton s'abonner
        });
        
    }
}