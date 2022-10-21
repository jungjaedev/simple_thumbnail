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

/**  */
