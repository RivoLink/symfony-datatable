import {
    RESTRICTION,
    Restriction,
} from "pw-components-js-dev"

class FIELD_RESTRICTION {
    static init() {
        RESTRICTION.add("CLIENT_NAME", [
            {
                verification: Restriction.get("disallowNumber")(),
            },
        ]);
    }
}

export { FIELD_RESTRICTION };