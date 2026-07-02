import { defineCodeRunnersSetup } from "@slidev/types";
import sanitizeHtml from "sanitize-html";

export default defineCodeRunnersSetup(() => {
    return {
        html(code) {
            return {
                html: sanitizeHtml(code, {
                    allowVulnerableTags: false,
                    allowedTags: [
                        ...sanitizeHtml.defaults.allowedTags,
                        "button",
                    ],
                    allowedAttributes: sanitizeHtml.defaults.allowedAttributes,
                }),
            };
        },
    };
});
