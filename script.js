const translations = window.profileTranslations || {};

const fonts = [
  { name: "default", img: "https://i.ibb.co/xqQjF0fX/default.png" },
  { name: "default-dropdown", img: "https://i.ibb.co/TBHxvbTL/default-dropdown.png" },
  { name: "default-dialog-button", img: "https://i.ibb.co/WpKCdCYV/default-dialog-button.png" },
  { name: "default-bold", img: "https://i.ibb.co/nxcXXqW/default-bold.png" },
  { name: "count-font", img: "https://i.ibb.co/r2GLcj3X/count-font.png" },
  { name: "compi", img: "https://i.ibb.co/7tvCYXHH/compi.png" },
  { name: "default-game", img: "https://i.ibb.co/hJS0tT9K/default-game.png" },
  { name: "default-large", img: "https://i.ibb.co/jZrqgfbt/default-large.png" },
  { name: "default-large-bold", img: "https://i.ibb.co/Rk8tGSGm/default-large-bold.png" },
  { name: "default-large-semibold", img: "https://i.ibb.co/vx2cNJ9P/default-large-semibold.png" },
  { name: "default-listbox", img: "https://i.ibb.co/dwBbhCph/default-listbox.png" },
  { name: "default-semibold", img: "https://i.ibb.co/Kx3brCGX/default-semibold.png" },
  { name: "default-small", img: "https://i.ibb.co/qF7MFv1k/default-small.png" },
  { name: "default-small-bold", img: "https://i.ibb.co/TMCSFrLD/default-small-bold.png" },
  { name: "default-small-semibold", img: "https://i.ibb.co/bRJnLdgL/default-small-semibold.png" },
  { name: "default-tiny-bold", img: "https://i.ibb.co/HDt6QZTh/default-tiny-bold.png" },
  { name: "heading-1", img: "https://i.ibb.co/3yd782NR/heading-1.png" },
  { name: "heading-2", img: "https://i.ibb.co/tMvxQ4SR/heading-2.png" },
  { name: "locale-pick", img: "https://i.ibb.co/4wM8xGCG/locale-pick.png" },
  { name: "scenario-message-dialog", img: "https://i.ibb.co/fdwY8P62/scenario-message-dialog.png" },
  { name: "technology-slot-level-font", img: "https://i.ibb.co/VWsynPF4/technology-slot-level-font.png" },
  { name: "var", img: "https://i.ibb.co/sdxr35SB/var.png" }
];

const textInput = document.getElementById('text-input');
const colorInput = document.getElementById('color-input');
const hexValue = document.getElementById('hex-value');
const codeMain = document.getElementById('code-maintext');
const codeBracketsStart = document.getElementById('code-brackets-start');
const codeBracketsEnd = document.getElementById('code-brackets-end');
const codeLength = document.getElementById('code-length');
const copyBtn = document.getElementById('copy-btn');
const copyFlyout = document.getElementById('copy-flyout');
const fontDropdown = document.getElementById('font-select-dropdown');
const fontBtn = document.getElementById('font-select-btn');
const fontBtnLabel = document.getElementById('font-btn-label');
const fontDropdownList = document.getElementById('font-dropdown-list');
const langSwitcher = document.getElementById('lang-switcher');
const langSelect = document.getElementById('lang-select');
const labelText = document.getElementById('label-text');
const labelFont = document.getElementById('label-font');
const labelColor = document.getElementById('label-color');
const codeTitle = document.getElementById('code-title');
const copyBtnTxt = document.getElementById('copy-btn-txt');
const headerTitle = document.getElementById('header-title');
const headerBy = document.getElementById('header-by');

let selectedFont = fonts[3].name;
let currentLang = 'ru';

function renderFontDropdown() {
  fontDropdownList.innerHTML = '';
  fonts.forEach(f => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `font-thumb-drop${f.name === selectedFont ? ' selected' : ''}`;
    btn.setAttribute('data-font', f.name);
    btn.tabIndex = 0;
    btn.innerHTML = `<img src="${f.img}" alt="${f.name}">`;
    btn.onclick = () => {
      selectedFont = f.name;
      updateFontBtn();
      closeFontDropdown();
      updateCode();
    };
    btn.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        btn.click();
        e.preventDefault();
      }
    });
    fontDropdownList.appendChild(btn);
  });
}

function updateFontBtn() {
  fontBtnLabel.textContent = selectedFont;
  fontDropdownList.querySelectorAll('.font-thumb-drop').forEach(el => {
    el.classList.toggle('selected', el.getAttribute('data-font') === selectedFont);
  });
}

function openFontDropdown() {
  fontDropdownList.classList.add('open');
  fontBtn.classList.add('open');
  fontBtn.setAttribute('aria-expanded', 'true');
}

function closeFontDropdown() {
  fontDropdownList.classList.remove('open');
  fontBtn.classList.remove('open');
  fontBtn.setAttribute('aria-expanded', 'false');
}

function updateCode() {
  const font = selectedFont;
  const color = colorInput.value.toLowerCase();
  const text = textInput.value;
  const code = `[color=${color}][font=${font}]${text}[/font][/color]`;

  hexValue.textContent = color;
  codeBracketsStart.textContent = `[color=${color}][font=${font}]`;
  codeBracketsEnd.textContent = '[/font][/color]';
  codeMain.textContent = text || ' ';
  codeMain.style.color = color;
  codeLength.textContent = `${code.length} / 155`;
  codeLength.classList.toggle('error', code.length > 155);
}

function copyCode() {
  const color = colorInput.value.toLowerCase();
  const text = textInput.value;
  const code = `[color=${color}][font=${selectedFont}]${text}[/font][/color]`;

  navigator.clipboard.writeText(code);
  copyFlyout.classList.add('shown');
  copyBtn.style.background = 'var(--factorio-copy-success)';
  copyBtn.style.color = '#fff';

  setTimeout(() => {
    copyFlyout.classList.remove('shown');
    copyBtn.style.background = 'var(--factorio-button)';
    copyBtn.style.color = '#fff';
  }, 1100);
}

function setLang(lang) {
  const nextLang = translations[lang] ? lang : 'ru';
  const locale = translations[nextLang];
  currentLang = nextLang;

  langSelect.value = nextLang;
  headerTitle.textContent = locale.header;
  headerBy.textContent = locale.by;
  labelText.textContent = locale.text;
  labelFont.textContent = locale.font;
  labelColor.textContent = locale.color;
  codeTitle.textContent = locale.code;
  copyBtnTxt.textContent = locale.copy;
  copyFlyout.textContent = locale.copied;
  textInput.placeholder = locale.placeholder;

  if (nextLang === 'en' && (textInput.value === 'Пример текста' || textInput.value === 'Приклад тексту')) {
    textInput.value = 'Sample text';
  }
  if (nextLang === 'uk' && (textInput.value === 'Пример текста' || textInput.value === 'Sample text')) {
    textInput.value = 'Приклад тексту';
  }
  if (nextLang === 'ru' && (textInput.value === 'Sample text' || textInput.value === 'Приклад тексту')) {
    textInput.value = 'Пример текста';
  }

  updateCode();
}

renderFontDropdown();
updateFontBtn();
updateCode();
setLang(currentLang);

fontBtn.addEventListener('click', e => {
  e.stopPropagation();
  if (fontDropdownList.classList.contains('open')) {
    closeFontDropdown();
    return;
  }
  openFontDropdown();
});

document.addEventListener('click', e => {
  if (!fontDropdown.contains(e.target)) {
    closeFontDropdown();
  }
});

fontBtn.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    fontBtn.click();
  }
  if (e.key === 'ArrowDown' && fontDropdownList.classList.contains('open')) {
    e.preventDefault();
    const first = fontDropdownList.querySelector('button');
    if (first) first.focus();
  }
});

fontDropdownList.addEventListener('keydown', e => {
  const items = Array.from(fontDropdownList.querySelectorAll('button'));
  const idx = items.indexOf(document.activeElement);

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (idx < items.length - 1) items[idx + 1].focus();
  }
  if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (idx > 0) items[idx - 1].focus();
    else fontBtn.focus();
  }
  if (e.key === 'Escape') {
    closeFontDropdown();
    fontBtn.focus();
  }
});

langSelect.addEventListener('change', function () {
  setLang(this.value);
});

textInput.addEventListener('input', updateCode);
colorInput.addEventListener('input', updateCode);
copyBtn.addEventListener('click', copyCode);

let lastX = 0;
let lastY = 0;

document.addEventListener('mousemove', e => {
  const x = Math.round((e.clientX / window.innerWidth) * 5) - 1;
  const y = Math.round((e.clientY / window.innerHeight) * 5) - 1;

  if (x !== lastX || y !== lastY) {
    document.body.style.backgroundPosition = `${x}px ${y}px`;
    lastX = x;
    lastY = y;
  }
});
