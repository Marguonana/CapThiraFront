const toastr = require('reactjs-toastr');

module.exports = {
    
    nav: (e, item) => {

        console.log(item);
        switch(item){
            case 'Actualité':
                window.location.assign("./trend");
                break;
            case 'Mon profil':
                window.location.assign("./profil");
                break;
            case 'Mes abonnements':
                toastr.info('Please wait until next release...')
                break;
            case 'Message':
                toastr.info("Vous n'avez aucun message...");
                break;
            case 'Deconnexion':
                localStorage.removeItem("id_token");
                localStorage.removeItem("id_user");
                window.location.assign("./connexion");
                break;
        }
        
    }

}
