const body = document.querySelector('body');

export function displayProject(project){
    const projDiv = document.createElement('div');
    const projH3 = document.createElement('h3');
    const todoListUl = document.createElement('ul');
    const addBtn = document.createElement('button');

    projH3.textContent = project.title;

    projDiv.append(projH3);
    projDiv.append(todoListUl);

    for(let item of project.todoArr){
        displayTodo(item, todoListUl, project);
    }

    addBtn.textContent = '+';
    projDiv.append(addBtn);

    addBtn.addEventListener('click', () => {
        const newTodoTitle = prompt('add new todo title');
        project.addTodo({title: newTodoTitle});
        const newTodo = project.todoArr[project.todoArr.length - 1];

        displayTodo(newTodo, todoListUl, project);
    })

    body.append(projDiv);
}

function displayTodo(todo, ul, project){
        const todoListUl = document.querySelector('ul');
        const todoLabel = document.createElement('label');
        todoLabel.for = 'todoCheck';

        const todoLi = document.createElement('li');
        const todoCheckbox = document.createElement('input', 'type="checkbox"');
        todoCheckbox.type = 'checkbox';
        todoCheckbox.id = 'todoCheck';

        todoLabel.textContent = todo.title;

        todoCheckbox.addEventListener('click', (e) => {
            todo.checklist = !todo.checklist;
        })

        const todoRemoveBtn = document.createElement('button');
        todoRemoveBtn.textContent = '-';
        todoRemoveBtn.addEventListener('click', (e) => {
            project.removeTodo(todo);
            todoLi.remove();
        })

        todoLi.append(todoCheckbox);
        todoLi.append(todoLabel);
        todoLi.append(todoRemoveBtn);
        ul.append(todoLi);
}