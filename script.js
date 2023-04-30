const keyboardEN = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl'];

const keyboardCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

function createDOM() {
  const main = document.createElement('main');
  const title = document.createElement('h1');
  const paragraph1 = document.createElement('p');
  const paragraph2 = document.createElement('p');
  const textarea = document.createElement('textarea');
  const keyboard = document.createElement('div');

  main.className = 'main';
  title.className = 'main__title';
  paragraph1.className = 'main__paragraph';
  paragraph2.className = 'main__paragraph';
  textarea.className = 'textarea';
  keyboard.className = 'keyboard';

  textarea.setAttribute('autofocus', 'true');

  title.innerHTML = 'RSS Виртуальная клавиатура';
  paragraph1.innerHTML = 'Клавиатура создана в операционной системе Windows';
  paragraph2.innerHTML = 'Для переключения языка комбинация: левые shift + alt';

  document.body.append(main);
  main.append(title);
  main.append(paragraph1);
  main.append(paragraph2);
  main.append(textarea);
  main.append(keyboard);
  keyboard.innerHTML = generateKeyboard();
}
createDOM();

function generateKeyboard() {
  let keyboard = '';
  for (let i = 0; i < keyboardEN.length; i++) {
    keyboard += `<div class="keyboard__key ${keyboardCode[i]}">${keyboardEN[i]}</div>`;
  }
  return keyboard;
}

document.onkeydown = function (event) {
  document.querySelector(`.${event.code}`)?.classList.add('active');
}

document.onkeyup = function (event) {
  document.querySelector(`.${event.code}`)?.classList.remove('active');
}

document.onmousedown = function (event) {
  if (event.target.parentElement === document.querySelector('.keyboard')) {
    let target = event.target;
    target.classList.add('active');
    
    document.onmouseup = function () {
      target.classList.remove('active');
    }
  }
}
