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
  let imgUrl = prompt('Please write the Image url.');
  if (imgUrl === null) return;
  if (!imgUrl.match(regex)) {
    alert('Please check the url again.');
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

/** font style */
const previewTitle = document.querySelector('.title');
const previewSubtitle = document.querySelector('.subtitle');
const previewSubject = document.querySelector('.subject');
const previewContent = document.querySelectorAll('.preview_content');
const fontShadowBtn = document.querySelector('.font__shadow');
const fontColorBtn = document.querySelector('.font__color');
const fontSizeBtn = document.querySelector('.font__size');
const fontBtn = document.querySelectorAll('.font__btn');

fontBtn.forEach(e => {
  e.addEventListener('click', e => {
    const target = e.target;
    target.classList.toggle('selected');
  });
});

// font color
const ChangefontColor = event => {
  previewContent.forEach(e => {
    if (event.target.classList.contains('selected')) {
      e.style.color = '#000000';
      previewSubtitle.style.borderTop = '1px solid #000000';
    } else {
      e.style.color = '#ffffff';
      previewSubtitle.style.borderTop = '1px solid #ffffff';
    }
  });
};

fontColorBtn.addEventListener('click', ChangefontColor);

// font size
const ChangefontSize = function (event) {
  previewContent.forEach(e => {
    if (event.target.classList.contains('selected')) {
      previewTitle.style.fontSize = '2.8rem';
      previewSubtitle.style.fontSize = '1.2rem';
      previewSubject.style.fontSize = '1.2rem';
    } else {
      previewTitle.style.fontSize = '3.2rem';
      previewSubtitle.style.fontSize = '1.4rem';
      previewSubject.style.fontSize = '1.4rem';
    }
  });
};

fontSizeBtn.addEventListener('click', ChangefontSize);

// font shadow
const ChangefontShadow = function (event) {
  previewContent.forEach(e => {
    if (event.target.classList.contains('selected')) {
      e.style.textShadow = '2px 2px 4px rgba(0,0,0,0.4)';
    } else {
      e.style.textShadow = '';
    }
  });
};

fontShadowBtn.addEventListener('click', ChangefontShadow);

/** component options */
const componentBtn = document.querySelectorAll('.component_optionBtn');

const changComponentOption = function (e) {
  if (e.target.classList.contains('field_type__option2')) {
    previewSubtitle.style.opacity = 0;
    previewSubject.style.opacity = 1;
  } else if (e.target.classList.contains('field_type__option1')) {
    previewSubtitle.style.opacity = 0;
    previewSubject.style.opacity = 0;
  } else if (e.target.classList.contains('field_type__option3')) {
    previewSubtitle.style.opacity = 1;
    previewSubject.style.opacity = 1;
  }

  componentBtn.forEach(e => {
    e.classList.remove('selected');
  });

  e.target.classList.add('selected');
};

componentBtn.forEach(e => {
  e.addEventListener('click', changComponentOption);
});

/** reset */
const resetBtn = document.querySelector('.reset');
const allBtns = document.querySelectorAll('.btn');

const resetBackgroundColor = () => {
  body.style.background = '#f4f4f4';
  preview.style.background = '#d4d4d4';
};

const resetText = () => {
  previewTitle.textContent = 'title';
  previewSubtitle.textContent = 'subtitle';
  previewSubject.textContent = 'subject';

  inputsField.forEach(e => {
    e.value = '';
  });
};

const resetSeletedBtn = () => {
  allBtns.forEach(e => {
    e.classList.remove('selected');
  });
};

const resetFontStyle = () => {
  previewContent.forEach(e => {
    e.style.textShadow = '';
    e.style.color = '#ffffff';
  });

  previewSubtitle.style.borderTop = '1px solid #ffffff';
  previewTitle.style.fontSize = '3.2rem';
  previewSubtitle.style.fontSize = '1.4rem';
  previewSubject.style.fontSize = '1.4rem';
};

const option3 = document.querySelector('.field_type__option3');

const reset = () => {
  resetBackgroundColor();
  resetText();
  resetSeletedBtn();
  resetFontStyle();

  option3.classList.add('selected');
  previewSubtitle.style.opacity = 1;
  previewSubject.style.opacity = 1;
};

resetBtn.addEventListener('click', reset);

/* default */
reset();

/* github button */
const githubBtn = document.querySelector('.copyright__image');

const openGithub = () => {
  window.open('https://github.com/jungjaedev/simple_thumbnail');
};

githubBtn.addEventListener('click', openGithub);

/* save funciton */
const saveBtn = document.querySelector('.save');
const modal = document.querySelector('.modal');

const captureExport = function () {
  window.scrollTo(0, 0);
  html2canvas(document.querySelector('#capture'), {
    letterRendering: 1,
    logging: true,
    allowTaint: false,
    scale: 2,
    scrollX: -window.scrollX,
    scrollY: -window.scrollY,
    windowWidth: document.documentElement.offsetWidth,
    windowHeight: document.documentElement.offsetHeight,
  }).then(canvas => {
    let el = document.querySelector('#target');
    el.href = canvas.toDataURL('image/jpeg');
    el.download = 'thumbnail.jpg';
    el.click();
  });

  modal.classList.remove('hidden');
};

saveBtn.addEventListener('click', captureExport);

// close funciton
// window.addEventListener('keydown', e => {
//   if (e.key === 'Escape') {
//     removeCapture();
//   }
// });

// const removeCapture = function () {
//   modal.removeChild(modal.firstElementChild);

//   modal.forEach(e => e.classList.add('hidden'));
// };
