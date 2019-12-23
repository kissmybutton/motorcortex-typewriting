# motorcortex-typewriting

## Installation

```bash
$ npm install --save @kissmybutton/motorcortex-typewriting
# OR
$ yarn add @kissmybutton/motorcortex-typewriting
```

## Loading

```javascript
const MotorCortex = require("@kissmybutton/motorcortex/");
const PluginDefinition = require("../src/main");
const Plugin = MotorCortex.loadPlugin(PluginDefinition);
```

# Create incident

## TxtWriting

```javascript
const nameOfIncident = new Plugin.TypeWriting(
  {
    size: 2,
    textColor: "#fff",
    cursorColor: [255, 255, 0],
    title: "testdawdawddaws",
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
```

### TxtWriting Attrs

| Name        | Are           | Values  |
| ------------- |:-------------:| -----:|
| size    | sizing of the  row  | all positive numbers |
| textColor |  the color of text |  hex values or RGB  |
| cursorColor |  the color of cursor |  array with 3 columns evry one get values fro 0 to 255 like rbg  |
| title |  left text |  normal text  |
| erase |  erase characters    |  all positive numbers  |
| eraseAll | erase all character after writing animation | true,false |
| delayIfEraseAll | if you have erase all and the erase > 0 you can add delay after erase character animation |  all positive numbers  |
| blinking |  if you like to have cursor   |  true,false |
| blinkingDuration |  cursor blinking duration time  |   all positive numbers |
| blinkDelay |  how fast the cursor blinks  |   all positive numbers |




# Add incident to your clip

```javascript
clipName.addIncident(nameOfIncident, 0);

```