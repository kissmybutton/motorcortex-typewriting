import TypeWriting from "./TypeWriting";
import { TypeWritingVal } from "./validation";

import { name, version } from "../package.json";

export default {
  npm_name: name,
  version: version,
  incidents: [
    {
      exportable: TypeWriting,
      name: "TypeWriting",
      attributesValidationRules: TypeWritingVal
    },
  ],
};
