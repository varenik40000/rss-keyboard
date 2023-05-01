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

//
const body = document.body;
let key = document.querySelectorAll('.key'),
  span = document.getElementsByTagName('span'),
  fnkey = document.querySelectorAll('.fnkey'),
  display = document.querySelector('.textarea');

//печать экранной клавиатуры
function printScreenKeyboard() {
  for (let k of key) {
    k.onclick = function () {
      display.textContent += k.textContent;
    }
  }
}
printScreenKeyboard()


function clear() {
  let text = display.innerHTML;
  display.textContent = text.substring(0, text.length - 1)
}
function printScreenFuncKeyboard(func, ...codes) {
  let pressed = new Set(),
      wrapper = document.querySelector('.wrapper');

  wrapper.addEventListener('click', function(event) {
    // console.log(event.target.innerHTML)
     
      pressed.add(event.target.innerHTML);
      // console.log(pressed)
      for (let code of codes) {
        if (!pressed.has(code)) {
          return;
        }
      }
      
      pressed.clear();
      clear();
      func();
    });

}
printScreenFuncKeyboard(() => display.textContent += '~',"Shift","`", );
printScreenFuncKeyboard(() => display.textContent += '!',"Shift","1", );
printScreenFuncKeyboard(() => display.textContent += '@',"Shift","2");
printScreenFuncKeyboard(() => display.textContent += '#',"Shift","3");
printScreenFuncKeyboard(() => display.textContent += '$',"Shift","4");
printScreenFuncKeyboard(() => display.textContent += '%',"Shift","5");
printScreenFuncKeyboard(() => display.textContent += '^',"Shift","6");
printScreenFuncKeyboard(() => display.textContent += '&',"Shift","7");
printScreenFuncKeyboard(() => display.textContent += '*',"Shift","8");
printScreenFuncKeyboard(() => display.textContent += '(',"Shift","9");
printScreenFuncKeyboard(() => display.textContent += ')',"Shift","0");
printScreenFuncKeyboard(() => display.textContent += '_',"Shift","=");
printScreenFuncKeyboard(() => display.textContent += '|',"Shift","\\");



function listener() {
  body.addEventListener('keydown', function (event) {

    let ru = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'й', 'ц', 'у', 'к',
      'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л',
      'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.'],
      eng = ['\`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'q', 'w', 'e', 'r', 't',
        'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';',
        '\'', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
      extraSymbol = ['!','@','#','$','%','^','&','*','(',')','_','+'],
      objFnKey = {
        Backspace() {
          let text = display.innerHTML;
          display.textContent = text.substring(0, text.length - 1)
        },
        Enter() { return display.textContent += '\n' },
        Delete() {
          let text = display.innerHTML;
          display.textContent = text.substring(0, text.length - 1)
        },
        CapsLock() {
          for (let i = 0; i < key.length; i++) {
            key[i].style.textTransform = "uppercase"
          }
          // display.textContent = text.toUpperCase()
        },
        ShiftLeft() { },
        ShiftRight() { },
        ArrowUp() { },
        ControlLeft() { },
        MetaLeft() { },
        AltLeft() { },
        Space() { return display.textContent += ' ' },
        AltRight() { },
        ArrowLeft() { },
        ArrowDown() { },
        ArrowRight() { },
        ControlRight() { },
        Tab() { return display.textContent += '    ' },

      },
      strKey = event.key,
      strCode = event.code;

    //анимация нажатия клавиш
    function toggleActive() {
      for (let i = 0; i < key.length; i++) {
        if (key[i].dataset.str === strCode) {
          key[i].classList.add('active');
          setTimeout(() => key[i].classList.remove('active'), 100)
          // console.log(key[i].dataset.str)
        }
      }
      for (let j = 0; j < fnkey.length; j++) {
        if (fnkey[j].dataset.str === strCode) {
          fnkey[j].classList.add('active');
          setTimeout(() => fnkey[j].classList.remove('active'), 100)
          // console.log(fnkey[j].dataset.str)
        }
      }
    }

    if (eng.includes(strKey) || ru.includes(strKey)) {
      for (let i = 0; i < key.length; i++) {
        key[i].style.textTransform = "lowercase"
      }
    }
    else {
      for (let i = 0; i < key.length; i++) {
        key[i].style.textTransform = "uppercase"
      }
    }
    if (strKey.search(/[А-яЁё]/) === -1) {
      for (let i = 0; i < key.length; i++) {
        key[i].innerHTML = eng[i]
      }
    }
    else {
      for (let i = 0; i < key.length; i++) {
        key[i].innerHTML = ru[i]
      }
    }


    //печать физической клавиатуры
    function printPhysicalKeyboard() {
      if (ru.includes(strKey.toLowerCase()) || eng.includes(strKey.toLowerCase())) {
        display.textContent += strKey;
        toggleActive()
      }

      for (let k in objFnKey) {
        if (k == strCode) {
          // console.log(objFnKey[k])
          objFnKey[k]()
          toggleActive()
        }
      }
    }
    printPhysicalKeyboard()
  })

}
listener()