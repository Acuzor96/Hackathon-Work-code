function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  if (taskInput.value.trim() === '') {
    alert('Please enter a task!');
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    <input type="checkbox" class="checkbox" onclick="completeTask(this)">
    <span>${taskInput.value}</span>
    <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
  `;
  taskList.appendChild(li);
  taskInput.value = '';
}

function completeTask(checkbox) {
  const taskText = checkbox.nextElementSibling;
  if (checkbox.checked) {
    taskText.style.textDecoration = 'line-through';
  } else {
    taskText.style.textDecoration = 'none';
  }
}

function deleteTask(button) {
  const taskList = document.getElementById('taskList');
  const li = button.parentElement;
  taskList.removeChild(li);
}

function toggleMessages() {
    var box = document.querySelector('.box');
    box.classList.toggle('open'); // Toggle 'open' class on click
}
