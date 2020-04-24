const MotorCortex = require("@kissmybutton/motorcortex");
const Player = require("@kissmybutton/motorcortex-player");
const PluginDefinition = require("../dist/motorcortex-typewriting.umd.js");
const Plugin = MotorCortex.loadPlugin(PluginDefinition);

const css = `.container { 
  position: relative; 
  background:linear-gradient(141deg, #ccc 25%, #eee 40%, #ddd 55%);
  height:100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
 }
 .row{
  display: flex;
  justify-content: space-around;
  align-items: center;
  
 
 }
 .cel{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
 }`;

const html = `<div class="container">

<div class="row" >
  <div class="cel"><div class="textwriting"></div> </div>
</div>

</div>`;

const host = document.getElementById("clip");

const containerParams = {
  width: "90%",
  height: "90%"
};

const clip = new MotorCortex.Clip({
  css,
  html,
  host,
  containerParams,
  audio: "off"
});

const textwriting = new Plugin.TypeWriting(
  {
    size: 2,
    textColor: "#fff",
    cursorColor: [255, 255, 0],
    title: "@kissmybutton/motorcortex-typewriting",
    erase: 4,
    eraseAll: true,
    delayIfEraseAll: 0,
    blinking: true,
    blinkingDuration: 400,
    blinkDelay: 100
  },
  {
    selector: ".textwriting"
  }
);

clip.addIncident(textwriting, 0);

new Player({ clip });
