const TypeWriting = require("./TypeWriting");
const attrs = require("./validation");
module.exports = {
  npm_name: "@kissmybutton/motorcortex-typewriting",
  incidents: [
    {
      exportable: TypeWriting,
      name: "TypeWriting",
      attributesValidationRules: attrs.TypeWriting
    }
  ]
};
