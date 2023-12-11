import {
    LIMITATION,
    Limitation
} from "pw-components-js-dev"

class FIELD_LIMITATION {
    static init() {
        LIMITATION.add("CLIENT_NAME", [
            {
                verification: Limitation.get("max")(255),
            },
        ]);
    }
}

export { FIELD_LIMITATION };