'use strict';

/** input */

const inputsField = document.querySelectorAll('.inputs__field');

const updateInputValue = function (e) {
  const target = e.target.dataset.set;
  document.querySelector(`.${target}`).textContent = e.target.value;
};

inputsField.forEach(e => {
  e.addEventListener('input', updateInputValue);
});

/** backgroud */
const body = document.body;
const preview = document.querySelector('.preview');
const solidBtn = document.querySelector('.background__solid');
const gradientBtn = document.querySelector('.background__gradient');
const importImageBtn = document.querySelector('.background__import_image');
const backgroundBtns = document.querySelector('.background_btns').children;

const createRGB = () => {
  let color = '';
  for (let i = 0; i < 3; i++) {
    color += Math.floor(Math.random() * 127 + 128).toString(16);
  }
  return color;
};

// background solid color
const changeToSolid = () => {
  const rgb = createRGB();
  [...backgroundBtns].forEach(e => {
    e.classList.remove('selected');
  });
  solidBtn.classList.add('selected');

  preview.style.background = '';
  body.style.background = '';
  preview.style.backgroundColor = `#${rgb}`;
  body.style.backgroundColor = `#${rgb}`;
};

solidBtn.addEventListener('click', changeToSolid);

// background gradient
const changeToGradient = () => {
  const rgb1 = createRGB();
  const rgb2 = createRGB();
  [...backgroundBtns].forEach(e => {
    e.classList.remove('selected');
  });
  gradientBtn.classList.add('selected');

  preview.style.background = `linear-gradient(to bottom, #${rgb1}, #${rgb2})`;
  body.style.background = `linear-gradient(to bottom, #${rgb1}, #${rgb2})`;
};

gradientBtn.addEventListener('click', changeToGradient);

// background import image
const importImage = function () {
  const regex =
    /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
  let imgUrl = prompt('이미지 주소를 입력하세요 😇');
  if (imgUrl === null) return;
  if (!imgUrl.match(regex)) {
    alert('올바르지 않은 URL입니다 😨');
    return;
  }

  body.style.background = preview.style.background = `url('${imgUrl}')`;
  body.style.backgroundSize = preview.style.backgroundSize = 'cover';
  body.style.backgroundRepeat = preview.style.backgroundRepeat = 'no-repeat';
  body.style.backgroundPosition = preview.style.backgroundPosition = 'center';

  [...backgroundBtns].forEach(e => {
    e.classList.remove('selected');
  });
  importImageBtn.classList.add('selected');
};

importImageBtn.addEventListener('click', importImage);
