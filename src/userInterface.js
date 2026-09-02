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
        const newTodoDescription = prompt('add description', 'none');
        project.addTodo({title: newTodoTitle, description: newTodoDescription});
        const newTodo = project.todoArr[project.todoArr.length - 1];

        displayTodo(newTodo, todoListUl, project);
    })

    body.append(projDiv);
}

function displayTodo(todo, ul, project){
        const todoLabel = document.createElement('label');
        todoLabel.for = 'todoCheck';

        const todoLi = document.createElement('li');
        const todoCheckbox = document.createElement('input', 'type="checkbox"');
        todoCheckbox.type = 'checkbox';
        todoCheckbox.id = 'todoCheck';

        if(todo.checklist){
            todoCheckbox.checked = true;
        }

        todoLabel.textContent = todo.title;

        todoCheckbox.addEventListener('click', (e) => {
            todo.checklist = !todo.checklist;
            localStorage.setItem('proj1', JSON.stringify(project));
        })

        function createRemoveButton(){
            const removeBtn = document.createElement('button');
            removeBtn.textContent = '-';
            removeBtn.addEventListener('click', (e) => {
                project.removeTodo(todo);
                todoLi.remove();
        })

            return removeBtn;
        }

        const todoRemoveBtn = createRemoveButton();

        // details button
        const todoDetailsBtn = document.createElement('button');
        todoDetailsBtn.textContent = 'details';
        todoDetailsBtn.addEventListener('click', (e) => {
            for (let key in todo){
                console.log(`${key}: ${todo[key]}`);
            }
        })

        const descriptionBtn = document.createElement('button');
        descriptionBtn.textContent = 'description';
        const descriptionP = document.createElement('p');
        descriptionP.textContent = '';
        descriptionBtn.addEventListener('click', (e) => {
            if(descriptionP.textContent == ''){
                descriptionP.textContent = todo.description;
                todoLi.append(descriptionP);
            }
            else {
                descriptionP.textContent = '';
                console.log('is this running?');
            }
        })

        todoLi.append(todoCheckbox);
        todoLi.append(todoLabel);
        todoLi.append(todoRemoveBtn);
        todoLi.append(todoDetailsBtn);
        todoLi.append(descriptionBtn);
        ul.append(todoLi);
}