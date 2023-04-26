'use strict';
'use strict';
function render() {
  let body = document.body;
  return body.innerHTML = `
  <div class="title">
  <h1>RSS Виртуальная клавиатура</h1>
  </div>
  <textarea class="textarea"></textarea>
  <div class="wrapper">
  <div class="line">
  <div class="key" data-str="Backquote">\`</div>
  <div class="key" data-str="Digit1">1</div>
  <div class="key" data-str="Digit2">2</div>
  <div class="key" data-str="Digit3">3</div>
  <div class="key" data-str="Digit4">4</div>
  <div class="key" data-str="Digit5">5</div>
  <div class="key" data-str="Digit6">6</div>
  <div class="key" data-str="Digit7">7</div>
  <div class="key" data-str="Digit8">8</div>
  <div class="key" data-str="Digit9">9</div>
  <div class="key" data-str="Digit0">0</div>
  <div class="key" data-str="Minus">-</div>
  <div class="key" data-str="Equal">=</div>
  <div class="fnkey bspace" data-str="Backspace">Backspace</div>
  </div>

  <div class="line">
  <div class="fnkey tab" data-str="Tab">Tab</div>
  <div class="key" data-str="KeyQ">q</div>
  <div class="key" data-str="KeyW">w</div>
  <div class="key" data-str="KeyE">e</div>
  <div class="key" data-str="KeyR">r</div>
  <div class="key" data-str="KeyT">t</div>
  <div class="key" data-str="KeyY">y</div>
  <div class="key" data-str="KeyU">u</div>
  <div class="key" data-str="KeyI">i</div>
  <div class="key" data-str="KeyO">o</div>
  <div class="key" data-str="KeyP">p</div>
  <div class="key" data-str="BracketLeft">[</div>
  <div class="key" data-str="BracketRight">]</div>
  <div class="key" data-str="Backslash">\\</div>
  <div class="fnkey del"  data-str="Delete">Del</div>
  </div>

  <div class="line">
  <div class="fnkey capslock" data-str="CapsLock">CapsLock</div>
  <div class="key" data-str="KeyA">a</div>
  <div class="key" data-str="KeyS">s</div>
  <div class="key" data-str="KeyD">d</div>
  <div class="key" data-str="KeyF">f</div>
  <div class="key" data-str="KeyG">g</div>
  <div class="key" data-str="KeyH">h</div>
  <div class="key" data-str="KeyJ">j</div>
  <div class="key" data-str="KeyK">k</div>
  <div class="key" data-str="KeyL">l</div>
  <div class="key" data-str="Semicolon">;</div>
  <div class="key" data-str="Quote">\'</div>
  <div class="fnkey enter" data-str="Enter">Enter</div>
  </div>

  <div class="line">
  <div class="fnkey shift" data-str="ShiftLeft">Shift</div>
  <div class="key" data-str="KeyZ">z</div>
  <div class="key" data-str="KeyX">x</div>
  <div class="key" data-str="KeyC">c</div>
  <div class="key" data-str="KeyV">v</div>
  <div class="key" data-str="KeyB">b</div>
  <div class="key" data-str="KeyN">n</div>
  <div class="key" data-str="KeyM">m</div>
  <div class="key" data-str="Comma">,</div>
  <div class="key" data-str="Period">.</div>
  <div class="key" data-str="Slash">/</div>
  <div class="fnkey up" data-str="ArrowUp"></div>
  <div class="fnkey shift" data-str="ShiftRight">Shift</div>
  </div>

  <div class="line">
  <div class="fnkey Ctrl" data-str="ControlLeft">Ctrl</div>
  <div class="fnkey Win" data-str="MetaLeft">Win</div>
  <div class="fnkey Alt" data-str="AltLeft">Alt</div>
  <div class="fnkey space" data-str="Space"></div>
  <div class="fnkey Alt" data-str="AltRight">Alt</div>
  <div class="fnkey left" data-str="ArrowLeft"></div>
  <div class="fnkey left" data-str="ArrowDown"></div>
  <div class="fnkey right" data-str="ArrowRight"></div>
  <div class="fnkey Ctrl" data-str="ControlRight">Ctrl</div>
  </div>
  </div>
`}
render()

function print() {
let key = document.querySelectorAll('.key');
let display = document.querySelector('.textarea');

for (let k of key) {
  k.onclick = function () {
    display.textContent += k.textContent;
  }
}
}
print()

