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
    css: `color:#37ff00;font-size:20px;font-weight:bold`,
    showCursor: true,
    cursorCss: "color:#37ff00;font-size:20px;font-weight:bold;",
    delay: 3000,
    hiatus: 2000,
    duration: 6000,
    text: `Wake up Neo...`,
  },
  { selector: "#type-container" }
);

const typewriteOne = new TypeWriting.TypeWriting(
  {
    css: `color:#37ff00;font-size:20px;font-weight:bold`,
    showCursor: true,
    cursorCss: "color:#37ff00;font-size:20px;font-weight:bold;",
    delay: 3000,
    hiatus: 2000,
    duration: 6000,
    text: `The Matrix has you...`,
  },
  { selector: "#type-container" }
);

clip.addIncident(typewrite, 0);
clip.addIncident(typewriteOne, 6000);

new Player({
  scaleToFit: true,
  clip: clip,
  theme: "mc-green",
  pointerEvents: true,
});
