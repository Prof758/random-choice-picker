'use strict';

const tagsEl = document.querySelector('#tags');
const textarea = document.querySelector('#textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
  createTag(e.target.value);
});

function createTag(input) {
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() != '')
    .map((tag) => tag.trim());

  tagsEl.innerHTML = '';

  tags.forEach((tag) => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}
