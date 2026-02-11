// Тексты на языках
const translations = {
  ru: {
    lang: "Русский",
    header: "Генератор [font] кода",
    by: "By FCTteam",
    text: "Текст:",
    placeholder: "Введите ваш текст...",
    font: "Шрифт:",
    color: "Цвет:",
    code: "Получившейся код:",
    copy: "Скопировать",
    copied: "Скопировано!"
  },
  en: {
    lang: "English",
    header: "[font] code generator",
    by: "By FCTteam",
    text: "Text:",
    placeholder: "Enter your text...",
    font: "Font:",
    color: "Color:",
    code: "Generated code:",
    copy: "Copy",
    copied: "Copied!"
  },
  uk: {
    lang: "Українська",
    header: "Генератор [font] коду",
    by: "Від FCTteam",
    text: "Текст:",
    placeholder: "Введіть ваш текст...",
    font: "Шрифт:",
    color: "Колір:",
    code: "Отриманий код:",
    copy: "Скопіювати",
    copied: "Скопійовано!"
  },
  kk: {
    lang: "Қазақша",
    header: "[font] код генераторы",
    by: "FCTteam жасаған",
    text: "Мәтін:",
    placeholder: "Мәтінді енгізіңіз...",
    font: "Қаріп:",
    color: "Түс:",
    code: "Нәтиже коды:",
    copy: "Көшіріп алу",
    copied: "Көшірілді!"
  },
  cs: {
    lang: "Čeština",
    header: "Generátor [font] kódu",
    by: "By FCTteam",
    text: "Text:",
    placeholder: "Zadejte svůj text...",
    font: "Písmo:",
    color: "Barva:",
    code: "Výsledný kód:",
    copy: "Kopírovat",
    copied: "Zkopírováno!"
  },
  nl: {
    lang: "Nederlands",
    header: "[font] codegenerator",
    by: "By FCTteam",
    text: "Tekst:",
    placeholder: "Voer uw tekst in...",
    font: "Lettertype:",
    color: "Kleur:",
    code: "Gegenereerde code:",
    copy: "Kopiëren",
    copied: "Gekopieerd!"
  },
  sv: {
    lang: "Svenska",
    header: "[font] kodgenerator",
    by: "By FCTteam",
    text: "Text:",
    placeholder: "Skriv din text...",
    font: "Typsnitt:",
    color: "Färg:",
    code: "Genererad kod:",
    copy: "Kopiera",
    copied: "Kopierat!"
  },
  de: {
    lang: "Deutsch",
    header: "[font] Code-Generator",
    by: "Von FCTteam",
    text: "Text:",
    placeholder: "Geben Sie Ihren Text ein...",
    font: "Schriftart:",
    color: "Farbe:",
    code: "Erzeugter Code:",
    copy: "Kopieren",
    copied: "Kopiert!"
  },
  pl: {
    lang: "Polski",
    header: "Generator kodu [font]",
    by: "By FCTteam",
    text: "Tekst:",
    placeholder: "Wpisz swój tekst...",
    font: "Czcionka:",
    color: "Kolor:",
    code: "Wygenerowany kod:",
    copy: "Kopiuj",
    copied: "Skopiowano!"
  },
  fr: {
    lang: "Français",
    header: "Générateur de code [font]",
    by: "Par FCTteam",
    text: "Texte:",
    placeholder: "Entrez votre texte...",
    font: "Police:",
    color: "Couleur:",
    code: "Code généré:",
    copy: "Copier",
    copied: "Copié !"
  },
  zh: {
    lang: "中文",
    header: "[font] 代码生成器",
    by: "By FCTteam",
    text: "文本：",
    placeholder: "输入您的文本...",
    font: "字体：",
    color: "颜色：",
    code: "生成的代码：",
    copy: "复制",
    copied: "已复制！"
  },
  ja: {
    lang: "日本語",
    header: "[font] コードジェネレーター",
    by: "By FCTteam",
    text: "テキスト：",
    placeholder: "テキストを入力してください...",
    font: "フォント：",
    color: "色：",
    code: "生成されたコード：",
    copy: "コピー",
    copied: "コピーしました！"
  }
};

// Массив с названиями шрифтов и их изображениями
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

// DOM elements
const textInput = document.getElementById('text-input');
const colorInput = document.getElementById('color-input');
const hexValue = document.getElementById('hex-value');
const codeMain = document.getElementById('code-maintext');
const codeBracketsStart = document.getElementById('code-brackets-start');
const codeBracketsEnd = document.getElementById('code-brackets-end');
const codeLength = document.getElementById('code-length');
const copyBtn = document.getElementById('copy-btn');
const copyFlyout = document.getElementById('copy-flyout');

// font dropdown
const fontDropdown = document.getElementById('font-select-dropdown');
const fontBtn = document.getElementById('font-select-btn');
const fontBtnLabel = document.getElementById('font-btn-label');
const fontDropdownList = document.getElementById('font-dropdown-list');
// language
const langSelect = document.getElementById('lang-select');
// translatable elements
const labelText = document.getElementById('label-text');
const labelFont = document.getElementById('label-font');
const labelColor = document.getElementById('label-color');
const codeTitle = document.getElementById('code-title');
const copyBtnTxt = document.getElementById('copy-btn-txt');
const headerTitle = document.getElementById('header-title');
const headerBy = document.getElementById('header-by');

let selectedFont = fonts[3].name; // default-bold
let currentLang = 'ru';

function renderFontDropdown() {
  fontDropdownList.innerHTML = '';
  fonts.forEach(f => {
    const btn = document.createElement('button');
    btn.type = "button";
    btn.className = "font-thumb-drop" + (f.name === selectedFont ? " selected" : "");
    btn.setAttribute("data-font", f.name);
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
renderFontDropdown();

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
fontBtn.addEventListener('click', function(e){
  e.stopPropagation();
  if (fontDropdownList.classList.contains('open')) {
    closeFontDropdown();
  } else {
    openFontDropdown();
  }
});
document.addEventListener('click', function(e){
  if (!fontDropdown.contains(e.target)) closeFontDropdown();
});
fontBtn.addEventListener('keydown', function(e){
  if (e.key === 'Enter' || e.key === ' '){
    e.preventDefault();
    fontBtn.click();
  }
  if (e.key === 'ArrowDown' && fontDropdownList.classList.contains('open')) {
    e.preventDefault();
    const first = fontDropdownList.querySelector('button');
    first && first.focus();
  }
});
fontDropdownList.addEventListener('keydown', function(e){
  const items = Array.from(fontDropdownList.querySelectorAll('button'));
  let idx = items.indexOf(document.activeElement);
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (idx < items.length-1) items[idx+1].focus();
  }
  if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (idx > 0) items[idx-1].focus();
    else fontBtn.focus();
  }
  if (e.key === 'Escape') {
    closeFontDropdown();
    fontBtn.focus();
  }
});

function updateCode() {
  const font = selectedFont;
  const color = colorInput.value.toLowerCase();
  const text = textInput.value;
  hexValue.textContent = color;
  let code = `[color=${color}][font=${font}]${text}[/font][/color]`;
  codeBracketsStart.textContent = `[color=${color}][font=${font}]`;
  codeBracketsEnd.textContent = `[/font][/color]`;
  codeMain.textContent = text || ' ';
  codeMain.style.color = color;
  codeLength.textContent = `${code.length} / 155`;
  if (code.length > 155) {
    codeLength.classList.add('error');
  } else {
    codeLength.classList.remove('error');
  }
}

function copyCode() {
  const font = selectedFont;
  const color = colorInput.value.toLowerCase();
  const text = textInput.value;
  const code = `[color=${color}][font=${font}]${text}[/font][/color]`;
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

textInput.addEventListener('input', updateCode);
colorInput.addEventListener('input', updateCode);
copyBtn.addEventListener('click', copyCode);

// --- Фон смещается в зависимости от положения курсора ---
let lastX = 0, lastY = 0;
document.addEventListener('mousemove', function(e) {
  // Расположение курсора относительно окна
  const x = Math.round(e.clientX / window.innerWidth * 5) - 1;
  const y = Math.round(e.clientY / window.innerHeight * 5) - 1;
  if (x !== lastX || y !== lastY) {
    document.body.style.backgroundPosition = `${x*1}px ${y*1}px`;
    lastX = x; lastY = y;
  }
});

// Языковое переключение
function setLang(lang) {
  currentLang = lang;
  // Переводы
  headerTitle.textContent = translations[lang].header;
  headerBy.textContent = translations[lang].by;
  labelText.textContent = translations[lang].text;
  labelFont.textContent = translations[lang].font;
  labelColor.textContent = translations[lang].color;
  codeTitle.textContent = translations[lang].code;
  copyBtnTxt.textContent = translations[lang].copy;
  copyFlyout.textContent = translations[lang].copied;
  textInput.placeholder = translations[lang].placeholder;
  // Изменяем значение по умолчанию для textarea если оно не изменено
  // (Для первого раза и для пустого текстового поля)
  if (
    (lang === "en" && (textInput.value === "Пример текста" || textInput.value === "Приклад тексту"))
  ) {
    textInput.value = "Sample text";
    updateCode();
  }
  if (
    (lang === "uk" && (textInput.value === "Пример текста" || textInput.value === "Sample text"))
  ) {
    textInput.value = "Приклад тексту";
    updateCode();
  }
  if (
    (lang === "ru" && (textInput.value === "Sample text" || textInput.value === "Приклад тексту"))
  ) {
    textInput.value = "Пример текста";
    updateCode();
  }
  updateCode();
}

langSelect.addEventListener("change", function() {
  setLang(this.value);
});

// Initial
updateFontBtn();
updateCode();
setLang('ru');
