let language = 'EN';
let shift = false;
let caps = false;

const keyboardEN = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl'];
const keyboardENCaps = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl'];
const keyboardENShift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl'];

const keyboardRU = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl'];
const keyboardRUCaps = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl'];
const keyboardRUShift = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl'];

const keyboardCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

function generateKeyboard(lang) {
  let keyboard = '';
  if (!caps && !shift) {
    if (lang === 'EN') {
      for (let i = 0; i < keyboardEN.length; i += 1) {
        keyboard += `<div class="keyboard__key ${keyboardCode[i]}">${keyboardEN[i]}</div>`;
      }
    } else {
      for (let i = 0; i < keyboardRU.length; i += 1) {
        keyboard += `<div class="keyboard__key ${keyboardCode[i]}">${keyboardRU[i]}</div>`;
      }
    }
  } else if (caps) {
    if (lang === 'EN') {
      for (let i = 0; i < keyboardENCaps.length; i += 1) {
        keyboard += `<div class="keyboard__key ${keyboardCode[i]}">${keyboardENCaps[i]}</div>`;
      }
    } else {
      for (let i = 0; i < keyboardRUCaps.length; i += 1) {
        keyboard += `<div class="keyboard__key ${keyboardCode[i]}">${keyboardRUCaps[i]}</div>`;
      }
    }
  } else if (shift) {
    if (lang === 'EN') {
      for (let i = 0; i < keyboardENShift.length; i += 1) {
        keyboard += `<div class="keyboard__key ${keyboardCode[i]}">${keyboardENShift[i]}</div>`;
      }
    } else {
      for (let i = 0; i < keyboardRUShift.length; i += 1) {
        keyboard += `<div class="keyboard__key ${keyboardCode[i]}">${keyboardRUShift[i]}</div>`;
      }
    }
  }
  return keyboard;
}

function createDOM(lang) {
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
  keyboard.innerHTML = generateKeyboard(lang);
}

function setLocalStorage() {
  localStorage.setItem('language', language);
}
window.addEventListener('beforeunload', setLocalStorage);

function letLocalStorage() {
  language = localStorage.getItem('language') || 'EN';
  createDOM(language);
}
window.addEventListener('load', letLocalStorage);

function changeLanguage() {
  if (language === 'EN') {
    language = 'RU';
    document.querySelector('.keyboard').innerHTML = generateKeyboard(language);
  } else {
    language = 'EN';
    document.querySelector('.keyboard').innerHTML = generateKeyboard(language);
  }
}

document.onkeydown = (event) => {
  event.preventDefault();
  document.querySelector('.textarea').focus();
  if (event.code !== 'Backspace' && event.code !== 'Tab' && event.code !== 'Delete' && event.code !== 'CapsLock' && event.code !== 'Enter' && event.code !== 'ShiftLeft' && event.code !== 'ShiftRight' && event.code !== 'ControlLeft' && event.code !== 'MetaLeft' && event.code !== 'AltLeft' && event.code !== 'AltRight' && event.code !== 'ControlRight') {
    if (event.code !== 'ArrowUp' && event.code !== 'ArrowLeft' && event.code !== 'ArrowDown' && event.code !== 'ArrowRight') {
      document.querySelector('.textarea').value += `${event.key}`;
    } else {
      switch (event.code) {
        case 'ArrowUp':
          document.querySelector('.textarea').value += '↑';
          break;
        case 'ArrowDown':
          document.querySelector('.textarea').value += '↓';
          break;
        case 'ArrowLeft':
          document.querySelector('.textarea').value += '←';
          break;
        case 'ArrowRight':
          document.querySelector('.textarea').value += '→';
          break;
        default:
          break;
      }
    }
  }

  if (event.code === 'Enter') {
    document.querySelector('.textarea').value += '\n';
  }

  if (event.code === 'Tab') {
    document.querySelector('.textarea').value += '\t';
  }

  if (event.code === 'Backspace') {
    document.querySelector('.textarea').value = document.querySelector('.textarea').value.slice(0, document.querySelector('.textarea').value.length - 1);
  }

  document.querySelector(`.${event.code}`)?.classList.add('active');
  if (event.shiftKey && event.altKey) {
    changeLanguage();
  }
  if (event.key === 'Tab') {
    event.preventDefault();
    document.querySelector('.textarea').value += '\t';
  }
  if (event.code === 'CapsLock') {
    if (caps) {
      caps = false;
      document.querySelector('.keyboard').innerHTML = generateKeyboard(language);
      document.querySelector('.CapsLock').classList.remove('active');
    } else {
      caps = true;
      document.querySelector('.keyboard').innerHTML = generateKeyboard(language);
      document.querySelector('.CapsLock').classList.add('active');
    }
  }
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    const cod = event.code;
    shift = true;
    document.querySelector('.keyboard').innerHTML = generateKeyboard(language);
    document.querySelector(`.${cod}`).classList.add('active');
  }
};

document.onkeyup = (event) => {
  if (event.code !== 'CapsLock') {
    document.querySelector(`.${event.code}`)?.classList.remove('active');
  }
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    shift = false;
    document.querySelector('.keyboard').innerHTML = generateKeyboard(language);
  }
};

document.onmousedown = (event) => {
  if (event.target.parentElement === document.querySelector('.keyboard')) {
    const e = event.target;
    e.classList.add('active');

    if (!e.classList.contains('Backspace') && !e.classList.contains('Tab') && !e.classList.contains('Delete') && !e.classList.contains('CapsLock') && !e.classList.contains('Enter') && !e.classList.contains('ShiftLeft') && !e.classList.contains('ShiftRight') && !e.classList.contains('ControlLeft') && !e.classList.contains('MetaLeft') && !e.classList.contains('AltLeft') && !e.classList.contains('AltRight') && !e.classList.contains('ControlRight')) {
      document.querySelector('.textarea').value += `${e.innerHTML}`;
    }

    if (e.classList.contains('Enter')) {
      document.querySelector('.textarea').value += '\n';
    }

    if (e.classList.contains('Tab')) {
      document.querySelector('.textarea').value += '\t';
    }

    if (e.classList.contains('Backspace')) {
      document.querySelector('.textarea').value = document.querySelector('.textarea').value.slice(0, document.querySelector('.textarea').value.length - 1);
    }

    if (e.classList.contains('CapsLock')) {
      if (caps) {
        caps = false;
        document.querySelector('.keyboard').innerHTML = generateKeyboard(language);
        document.querySelector('.CapsLock').classList.remove('active');
      } else {
        caps = true;
        document.querySelector('.keyboard').innerHTML = generateKeyboard(language);
        document.querySelector('.CapsLock').classList.add('active');
      }
    }

    if (e.classList.contains('ShiftLeft') || e.classList.contains('ShiftRight')) {
      let cod;
      if (e.classList.contains('ShiftLeft')) {
        cod = 'ShiftLeft';
      } else {
        cod = 'ShiftRight';
      }
      shift = true;
      document.querySelector('.keyboard').innerHTML = generateKeyboard(language);
      document.querySelector(`.${cod}`).classList.add('active');
    }

    document.onmouseup = () => {
      if (event.code !== 'CapsLock') {
        e.classList.remove('active');
      }
      if (event.target.classList.contains('ShiftLeft') || event.target.classList.contains('ShiftRight')) {
        shift = false;
        document.querySelector('.keyboard').innerHTML = generateKeyboard(language);
      }
      document.querySelector('.textarea').focus();
    };
  }
};
