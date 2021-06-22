export const TypeWritingVal = {
  css: {
    optional: true,
    type: "string",
  },
  showCursor: {
    optional: true,
    type: "boolean",
  },
  cursorCss: {
    optional: true,
    type: "string",
  },
  blinkDelay: {
    optional: false,
    type: "number",
    min: 0,
  },
  blinkhiatus: {
    optional: true,
    type: "number",
    min: 0,
  },
  text: {
    type: "string",
    optional: true,
  },
};
