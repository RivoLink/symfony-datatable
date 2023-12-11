import STRUCTURE from "common/structure/FIELD/FIELD.STRUCTURE.js"
//TODO spread default translation and optimize getText: getText("...") > getText()....

class FIELD{
    static initProperties(targetClass) {
        for (var propertyName in this) {
            if (propertyName !== "initProperties" && propertyName !== "inherit") {
                targetClass[propertyName] = this[propertyName];
            }
        }
    }
    
    static inherit() {
        this.initProperties(this);
    }

    static CLIENT_NAME = {
        ...STRUCTURE.NAME,
        PLACEHOLDER:{
            DEFAULT:"Entrer le nom du client",
        },
        LABEL:{
            DEFAULT:"Nom du client",
        },
        EMPTY_MESSAGE:{
            DEFAULT:"Veuillez saisir le nom du client",
        },
        TH:"Nom du client",
    }
    static CLIENT_PHONE = {
        ...STRUCTURE.PHONE,
        PLACEHOLDER:{
            DEFAULT:"Entrer le numéro de téléphone du client",
        },
        LABEL:{
            DEFAULT:"Numéro de téléphone du client",
        },
        EMPTY_MESSAGE:{
            DEFAULT:"Veuillez saisir le numéro de téléphone du client",
        },
        INVALID_PHONE:{
            DEFAULT:"Numero invalide",
        },
        TH:"Téléphone",
    }
    static CLIENT_SEARCH = {
        ...STRUCTURE.SEARCH,
        PLACEHOLDER:{
            DEFAULT:"Entrer une clé de recherche",
        },
        LABEL:{
            DEFAULT:"Rechercher : ",
        },
        EMPTY_MESSAGE:{
            DEFAULT:"Veuillez saisir une clé de recherche",
        },
        LOWER_LENGTH_MESSAGE:{
            DEFAULT:"Veuillez saisir au moins 3 lettres",
        },
    }
    static PAGE_SIZE = {
        ...STRUCTURE.PAGE_SIZE,
        PLACEHOLDER:{
            DEFAULT:"Selectionner le nombre d'element dans une page",
        },
        LABEL:{
            DEFAULT:"Nombre d'element dans une page : ",
        },
    }
    static CLIENT_REMOVE_MESSAGE = "Etes vous sur de supprimer {{clientName}} ?"
    static CLIENT_ID = "Id"
    static CLIENT_LIST = {
        EMPTY_MESSAGE:"Aucun resultat"
    }
    static COMMON = {
        ENTRY: "entrée(s)"
    }
}

export default FIELD;