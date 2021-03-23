import Player from "@kissmybutton/motorcortex-player";
import { HTMLClip, loadPlugin } from "@kissmybutton/motorcortex/";
import TypeWritingDefinition from "../src/";
const TypeWriting = loadPlugin(TypeWritingDefinition);

const clip = new HTMLClip({
  html: `
    <div class="container">
      <div id="type-container"></div>
    </div>`,
  css: `
  .container{
    width:100%;
    height:100%;
    position:relative;
    background:black;
    display:flex;
    justify-content:center;
    align-items: center;
  }
  #type-container{
    width:80%;
    height:100px;
  }
`,
  host: document.getElementById("clip"),
  containerParams: {
    width: "720px",
    height: "640px",
  },
});

const typewrite = new TypeWriting.TypeWriting(
  {
    attrs: {
      css: `color:#37ff00;font-size:20px;font-weight:bold`,
      showCursor: true,
      cursorColor: "#37ff00",
      delay: 3000,
      hiatus: 2000,
    },
    animatedAttrs: {
      text: `Wake up Neo...`,
    },
  },
  { duration: 6000, selector: "#type-container" }
);

const typewrite1 = new TypeWriting.TypeWriting(
  {
    attrs: {
      css: `color:#37ff00;font-size:20px;font-weight:bold;letter-spacing:2px`,
      showCursor: true,
      cursorCss: "color:#37ff00;font-size:20px;font-weight:bold;",
      delay: 3000,
      hiatus: 2000,
    },
    animatedAttrs: {
      text: `The Matrix has you...`,
    },
  },
  { duration: 6000, selector: "#type-container" }
);

clip.addIncident(typewrite, 0);
clip.addIncident(typewrite1, 6000);

new Player({
  scaleToFit: true,
  clip: clip,
  theme: "mc-green",
  pointerEvents: false,
});
