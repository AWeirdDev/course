import { defineCodeRunnersSetup } from "@slidev/types";
import sanitizeHtml from "sanitize-html";

export default defineCodeRunnersSetup(() => {
    return {
        html(code) {
            return {
                html: sanitizeHtml(code, {
                    allowVulnerableTags: false,
                    allowedTags: [...sanitizeHtml.defaults.allowedTags, "img"],
                    allowedAttributes: {
                        ...sanitizeHtml.defaults.allowedAttributes,
                        img: [
                            "src",
                            "alt",
                            "title",
                            "width",
                            "height",
                            "loading",
                        ],
                    },
                    allowedSchemes: ["http", "https", "data"],
                }),
            };
        },
    };
});
