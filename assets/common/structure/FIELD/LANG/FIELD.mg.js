import FR_FIELD from "./FIELD.fr.js"

class FIELD extends FR_FIELD{
    static CLIENT_SEARCH = {
        ...FR_FIELD.CLIENT_SEARCH,
        LABEL:{
            DEFAULT:"Hitady : ",
        },
    }
    static CLIENT_REMOVE_MESSAGE = "Ho fafaina ve i {{clientName}} ?"
}

FIELD.inherit();

export default FIELD;