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
  delay: {
    optional: false,
    type: "number",
    min: 0,
  },
  hiatus: {
    optional: true,
    type: "number",
    min: 0,
  },
  duration: {
    type: "number",
    min: 0,
  },
  text: {
    type: "string",
    optional: true,
  },
};
