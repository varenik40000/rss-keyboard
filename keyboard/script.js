'use strict';
const div__title = document.createElement("div");
div__title.classList.add('title');
div__title.insertAdjacentHTML("beforeend", '<h1>RSS Виртуальная клавиатура</h1>');
document.body.append(div__title);

const textarea = document.createElement("textarea");
textarea.classList.add('textarea');
textarea.insertAdjacentHTML("beforeend", '');
document.body.append(textarea);

const div = document.createElement("div");
div.classList.add('wrapper');
document.body.append(div);

const div__list1 = document.createElement("div");
div__list1.classList.add('line');
div__list1.insertAdjacentHTML("beforeend", '<div class="key" data="~">~</div>');
div__list1.insertAdjacentHTML("beforeend", '<div class="key" data="1">1</div>');
div__list1.insertAdjacentHTML("beforeend", '<div class="key" data="2">2</div>');
div__list1.insertAdjacentHTML("beforeend", '<div class="key" data="3">3</div>');
div__list1.insertAdjacentHTML("beforeend", '<div class="key" data="4">4</div>');
div__list1.insertAdjacentHTML("beforeend", '<div class="key" data="5">5</div>');
div__list1.insertAdjacentHTML("beforeend", '<div class="key" data="6">6</div>');
div__list1.insertAdjacentHTML("beforeend", '<div class="key" data="7">7</div>');
div__list1.insertAdjacentHTML("beforeend", '<div class="key" data="8">8</div>');
div__list1.insertAdjacentHTML("beforeend", '<div class="key" data="9">9</div>');
div__list1.insertAdjacentHTML("beforeend", '<div class="key" data="0">0</div>');
div__list1.insertAdjacentHTML("beforeend", '<div class="key" data="-">-</div>');
div__list1.insertAdjacentHTML("beforeend", '<div class="key" data="=">=</div>');
div__list1.insertAdjacentHTML("beforeend", '<div class="fnkey bspace">Backspace</div>');
div.appendChild(div__list1);

const div__list2 = document.createElement("div");
div__list2.classList.add('line');
div__list2.insertAdjacentHTML("beforeend", '<div class="fnkey tab">Tab</div>');
div__list2.insertAdjacentHTML("beforeend", '<div class="key" data="q">q</div>');
div__list2.insertAdjacentHTML("beforeend", '<div class="key" data="w">w</div>');
div__list2.insertAdjacentHTML("beforeend", '<div class="key" data="e">e</div>');
div__list2.insertAdjacentHTML("beforeend", '<div class="key" data="r">r</div>');
div__list2.insertAdjacentHTML("beforeend", '<div class="key" data="t">t</div>');
div__list2.insertAdjacentHTML("beforeend", '<div class="key" data="y">y</div>');
div__list2.insertAdjacentHTML("beforeend", '<div class="key" data="u">u</div>');
div__list2.insertAdjacentHTML("beforeend", '<div class="key" data="i">i</div>');
div__list2.insertAdjacentHTML("beforeend", '<div class="key" data="o">o</div>');
div__list2.insertAdjacentHTML("beforeend", '<div class="key" data="p">p</div>');
div__list2.insertAdjacentHTML("beforeend", '<div class="key" data="[">[</div>');
div__list2.insertAdjacentHTML("beforeend", '<div class="key" data="]">]</div>');
div__list2.insertAdjacentHTML("beforeend", '<div class="key" data="\\">\\</div>');
div__list2.insertAdjacentHTML("beforeend", '<div class="fnkey del">Del</div>');
div.appendChild(div__list2);

const div__list3 = document.createElement("div");
div__list3.classList.add('line');
div__list3.insertAdjacentHTML("beforeend", '<div class="fnkey capslock">Caps Lock</div>');
div__list3.insertAdjacentHTML("beforeend", '<div class="key" data="a">a</div>');
div__list3.insertAdjacentHTML("beforeend", '<div class="key" data="s">s</div>');
div__list3.insertAdjacentHTML("beforeend", '<div class="key" data="d">d</div>');
div__list3.insertAdjacentHTML("beforeend", '<div class="key" data="f">f</div>');
div__list3.insertAdjacentHTML("beforeend", '<div class="key" data="g">g</div>');
div__list3.insertAdjacentHTML("beforeend", '<div class="key" data="h">h</div>');
div__list3.insertAdjacentHTML("beforeend", '<div class="key" data="j">j</div>');
div__list3.insertAdjacentHTML("beforeend", '<div class="key" data="k">k</div>');
div__list3.insertAdjacentHTML("beforeend", '<div class="key" data="l">l</div>');
div__list3.insertAdjacentHTML("beforeend", '<div class="key" data=";">;</div>');
div__list3.insertAdjacentHTML("beforeend", '<div class="key" data="\'">\'</div>');
div__list3.insertAdjacentHTML("beforeend", '<div class="enter" data="<br>">Enter</div>');
div.appendChild(div__list3);

const div__list4 = document.createElement("div");
div__list4.classList.add('line');
div__list4.insertAdjacentHTML("beforeend", '<div class="fnkey shift">Shift</div>');
div__list4.insertAdjacentHTML("beforeend", '<div class="key" data="z">z</div>');
div__list4.insertAdjacentHTML("beforeend", '<div class="key" data="x">x</div>');
div__list4.insertAdjacentHTML("beforeend", '<div class="key" data="c">c</div>');
div__list4.insertAdjacentHTML("beforeend", '<div class="key" data="v">v</div>');
div__list4.insertAdjacentHTML("beforeend", '<div class="key" data="b">b</div>');
div__list4.insertAdjacentHTML("beforeend", '<div class="key" data="n">n</div>');
div__list4.insertAdjacentHTML("beforeend", '<div class="key" data="m">m</div>');
div__list4.insertAdjacentHTML("beforeend", '<div class="key" data=",">,</div>');
div__list4.insertAdjacentHTML("beforeend", '<div class="key" data=".">.</div>');
div__list4.insertAdjacentHTML("beforeend", '<div class="key" data="/">/</div>');
div__list4.insertAdjacentHTML("beforeend", '<div class="fnkey up"></div>');
div__list4.insertAdjacentHTML("beforeend", '<div class="fnkey shift">Shift</div>');
div.appendChild(div__list4);

const div__list5 = document.createElement("div");
div__list5.classList.add('line');
div__list5.insertAdjacentHTML("beforeend", '<div class="fnkey Ctrl">Ctrl</div>');
div__list5.insertAdjacentHTML("beforeend", '<div class="fnkey Win">Win</div>');
div__list5.insertAdjacentHTML("beforeend", '<div class="fnkey Alt">Alt</div>');
div__list5.insertAdjacentHTML("beforeend", '<div class="fnkey space"></div>');
div__list5.insertAdjacentHTML("beforeend", '<div class="fnkey Alt">Alt</div>');
div__list5.insertAdjacentHTML("beforeend", '<div class="fnkey left"></div>');
div__list5.insertAdjacentHTML("beforeend", '<div class="fnkey down"></div>');
div__list5.insertAdjacentHTML("beforeend", '<div class="fnkey right"></div>');
div__list5.insertAdjacentHTML("beforeend", '<div class="fnkey Ctrl">Ctrl</div>');
div.appendChild(div__list5);




let key = document.querySelectorAll('.key');
let display = document.querySelector('.textarea');

for(let k of key){
k.onclick = function(){
    display.textContent += k.textContent;
  }
}  

