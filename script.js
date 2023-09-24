const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

createBtn.addEventListener('click', () => {
  let inputBox = document.createElement('p');
  let img = document.createElement('img');
  inputBox.className = 'input-box';
  inputBox.setAttribute('contenteditable','true');
  img.src = 'delete-icon.png';
  notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener('click', function(e){
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    update();
  }
  else if (e.target.tagName === "P") {
    notes = document.querySelectorAll('.input-box');
    notes.forEach(i => {
      i.onkeyup = function () {
        update();
      }
    });
  }
});

function update() {
  localStorage.setItem('notes', notesContainer.innerHTML);
}

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem('notes');
}

showNotes();

document.addEventListener('keydown', event => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
