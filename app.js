function addItemToList() {
  const currentList = document.getElementById('toDoList');
  const listItem = document.createElement('li');

  const input = document.getElementById('item');
  if (input.value) {
    listItem.innerText = input.value;
    listItem.classList.add('toDoItem');
    listItem.setAttribute('onClick', 'strikeText(this)');
    currentList.appendChild(listItem);
    handleEnterKeyPress(input);
  }
  clearField(input);
}

function strikeText(element) {
  element.classList.toggle('itemDone');
}

function clearField(field) {
  field.value = '';
}

function handleEnterKeyPress(input) {
  input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      document.getElementById('Add').click();
    }
  });
}

function addDeleteButton() {
  const itemsDone = document.querySelectorAll('.toDoItem');
  if (itemsDone.length !== 0) {
    const getDiv = document.getElementById('delete');
    const button = document.createElement('button');
    button.textContent = 'Clear List';
    button.setAttribute('onClick', 'deleteAllItems()');
    getDiv.appendChild(button);
  }
}

addDeleteButton();

function deleteAllItems() {
  const items = document.querySelectorAll('.toDoItem');
  for (let i = 0; i < items.length; i++) {
    items[i].remove();
  }
}
