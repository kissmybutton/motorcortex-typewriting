import MC from "@kissmybutton/motorcortex";

export default class TypeWriting extends MC.Effect {
  onGetContext() {
    this.element.style = this.attrs.attrs.css;
    this.cursorElement = `<span style="${this.attrs.attrs.cursorCss}">|</span>`;
    this.delay = this.attrs.attrs.delay || 0;
    this.hiatus = this.attrs.attrs.hiatus || 0;
  }

  getScratchValue() {
    return "";
  }

  onProgress(fraction, currentTime) {
    let text = "";
    const { duration } = this.props;
    const typeFraction = (duration - this.delay - this.hiatus) / duration;
    const delayFraction = this.delay / duration;
    let currentTypefraction = (fraction - delayFraction) / typeFraction;
    if (currentTypefraction < 0) currentTypefraction = 0;
    const currentTextLength = this.targetValue.length * currentTypefraction;
    text += this.targetValue.slice(0, currentTextLength);

    const { showCursor } = this.attrs.attrs;
    const ishalfOfSecond = parseInt(currentTime / 500) % 2;
    const beforeTyping = currentTime < this.delay;
    const afterTyping = currentTime > this.props.duration - this.hiatus;
    const typing = !beforeTyping && !afterTyping;
    if (showCursor && (ishalfOfSecond || typing)) {
      text += this.cursorElement;
    }

    this.element.innerHTML = text;
  }
}
