function addTask(taskText) {
  const todoList = document.getElementById('todo-list');
  const li = document.createElement('li');
  li.classList.add('todo-item');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('form-check-input');
  checkbox.onclick = function() {
    if (checkbox.checked) {
      span.style.textDecoration = 'line-through';
    } else {
      span.style.textDecoration = 'none';
    }
  };

  const span = document.createElement('span');
  span.textContent = taskText;

  const removeBtn = document.createElement('button');
  removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
  removeBtn.onclick = function() {
    li.remove();
  };

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(removeBtn);

  todoList.appendChild(li);
}

document.getElementById('survey-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const newTaskInput = document.getElementById('new-task');
  const taskText = newTaskInput.value.trim();
  if (taskText) {
    addTask(taskText);
    newTaskInput.value = '';
  }
});