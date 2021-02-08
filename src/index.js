import TypeWriting from "./TypeWriting"
import {TypeWritingVal} from "./validation"

const pkg = require("../package.json");

export default {
  npm_name: pkg.name,
  version: pkg.version,
  incidents: [
    {
      exportable: TypeWriting,
      name: "TypeWriting",
      attributesValidationRules: TypeWritingVal
    }
  ]
};
