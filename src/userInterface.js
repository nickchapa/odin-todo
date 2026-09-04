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

    addBtn.textContent = 'New Task';
    projDiv.append(addBtn);

    addBtn.addEventListener('click', () => {
        const newTodoTitle = prompt('add new todo title');
        if (newTodoTitle == null){
            return;
        }

        let newTodoDescription = prompt('add description', 'none');
        if (newTodoDescription == null){
            newTodoDescription = 'none';
        }
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
            removeBtn.textContent = 'delete';
            removeBtn.addEventListener('click', (e) => {
                project.removeTodo(todo);
                todoLi.remove();
        })

            return removeBtn;
        }

        function createDetailsButton(){
            const detailsBtn = document.createElement('button');
            const todoDetailsUl = document.createElement('ul');
            todoDetailsUl.className = 'details-ul';
            detailsBtn.textContent = 'details';
            todoDetailsUl.textContent = '';
            detailsBtn.addEventListener('click', (e) => {
                if(todoDetailsUl.textContent == ''){
                    for (let key in todo){
                        const detailsLi = document.createElement('li');
                        detailsLi.textContent = `${key}: ${todo[key]}`;
                        todoDetailsUl.append(detailsLi);
                    }
                    const todoRemoveBtn = createRemoveButton();
                    todoLi.append(todoDetailsUl);
                    todoDetailsUl.append(todoRemoveBtn);
                }
                else todoDetailsUl.textContent = '';
            })

            return detailsBtn
        }

        const todoDetailsBtn = createDetailsButton();

        todoLi.append(todoCheckbox);
        todoLi.append(todoLabel);
        todoLi.append(todoDetailsBtn);
        ul.append(todoLi);
}