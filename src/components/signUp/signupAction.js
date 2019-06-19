const PREFIX_JPEG = "data:image/jpeg;base64,";
const PREFIX_PNG = "data:image/png;base64,";
const signupService = require('./signupService');

module.exports = {

    createAccountAction: (data) =>{
        return new Promise ((resolve, reject)=> {
            if (!data)
                return reject('Please fill up the form.');
            if (data.age < 15 )
                return reject("Come back when you will be 15!");
            signupService.createAccount(data).then( (statut) => {
                resolve();
            })
            .catch( (err) => {
                reject();
            })
        })
    }
    
}
