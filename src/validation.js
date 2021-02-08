const _COLOR = "color";

export const TypeWritingVal = {
  size: {
    optional: true,
    type: "number",
    min: 0
  },
  textColor: {
    optional: true,
    type: _COLOR
  },
  cursorColor: {
    optional: true,
    type: "array",
    min: 3,
    max: 3,
    items: {
      optional: true,
      type: "number",
      min: 0,
      max: 255
    }
  },
  title: {
    optional: false,
    type: "string"
  },
  erase: {
    optional: true,
    type: "number",
    min: 0
  },
  eraseAll: {
    type: "boolean",
    optional: true
  },
  delayIfEraseAll: {
    optional: true,
    type: "number",
    min: 0
  },
  blinking: {
    type: "boolean",
    optional: true
  },
  blinkingDuration: {
    optional: true,
    type: "number",
    min: 0
  },
  blinkDelay: {
    optional: true,
    type: "number",
    min: 0
  },
  overlayColor: {
    optional: true,
    type: "array",
    min: 2,
    items: {
      optional: true,
      type: _COLOR
    }
  }
};
