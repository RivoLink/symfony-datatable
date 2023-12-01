import {
    VALIDATION,
    Validation,
} from "pw-components-js-dev"

import {FieldManager} from "pw-components-js-dev"

class FIELD_VALIDATION {
    static init() {
        var domain = FieldManager.domain;

        Validation.add("validatePhoneNumber", () => {
            return (value, {instance}) => {
                var refs = instance.instance.$refs;
                //instance = field
                //instance.instance = modal
                //instance.instance.$refs[instance.id] Input
                if (refs && refs[instance.id]) {
                    return refs[instance.id].$refs.input.inputmask.isComplete()
                }
            }
        })


        var CLIENT_NAME_CLIENT_LIST = [
            Validation.build({ domain })("CLIENT_NAME", "notEmpty", "EMPTY_MESSAGE"),
        ]
        VALIDATION.add("CLIENT_NAME", {
            CLIENT_LIST: CLIENT_NAME_CLIENT_LIST,
        });
        var CLIENT_PHONE_CLIENT_LIST = [
            Validation.build({ domain })("CLIENT_PHONE", "notEmpty", "EMPTY_MESSAGE"),
        ]
        var CLIENT_PHONE_CLIENT_LIST = [
            Validation.build({ domain })("CLIENT_PHONE", "validatePhoneNumber", "INVALID_PHONE"),
        ]
        VALIDATION.add("CLIENT_PHONE", {
            CLIENT_LIST: CLIENT_PHONE_CLIENT_LIST,
        });
    }
}
export { FIELD_VALIDATION };