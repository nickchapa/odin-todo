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
        const todoLi = document.createElement('li');
        todoLi.textContent = item.title;
        todoListUl.append(todoLi);
    }

    addBtn.textContent = '+';
    projDiv.append(addBtn);

    addBtn.addEventListener('click', () => {
        const newTodoTitle = prompt('add new todo title');
        project.addTodo(newTodoTitle);

        const newTodoLi = document.createElement('li');
        newTodoLi.textContent = project.todoArr[project.todoArr.length - 1].title;

        todoListUl.append(newTodoLi);
    })

    body.append(projDiv);
}