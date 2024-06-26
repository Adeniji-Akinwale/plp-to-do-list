document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);

    function addTask(e) {
        e.preventDefault();

        const taskText = taskInput.value;
        if (taskText === '') return;

        const li = document.createElement('li');
        li.appendChild(document.createTextNode(taskText));

        const removeBtn = document.createElement('button');
        removeBtn.innerHTML = '&times;';
        li.appendChild(removeBtn);

        taskList.appendChild(li);
        taskInput.value = '';
    }

    function removeTask(e) {
        if (e.target.tagName === 'BUTTON') {
            e.target.parentElement.remove();
        }
    }
});
