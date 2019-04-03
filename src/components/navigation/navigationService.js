const toastr = require('reactjs-toastr');

module.exports = {
    
    nav: (e, item) => {

        console.log(item);
        switch(item){
            case 'Mon profil':
                break;
            case 'Mes abonnements':
                break;
            case 'Message':
                toastr.info("Vous n'avez aucun message...");
                break;
            case 'Paramètre':
                toastr.info("Aucun parametre a configurer")
                break;
            case 'Deconnexion':
                localStorage.removeItem("id_token");
                localStorage.removeItem("id_user");
                window.location.assign("./connexion");
                break;
        }
        
    }

}
