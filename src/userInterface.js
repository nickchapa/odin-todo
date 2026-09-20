import { Project } from './Project.js';

const body = document.querySelector('body');

export function displayProject(project){
    const projDiv = document.createElement('div');
    const projH3 = document.createElement('h3');
    const todoListUl = document.createElement('ul');

    projDiv.className = 'proj-div';

    projH3.textContent = project.title;

    projDiv.append(projH3);
    projDiv.append(todoListUl);

    for(let item of project.todoArr){
        displayTodo(item, todoListUl, project, projDiv);
    }

    function createNewTaskBtn(){
        const newTaskBtn = document.createElement('button');
        newTaskBtn.textContent = 'New Task';

        newTaskBtn.addEventListener('click', () => {
            let newTodoTitle = prompt('add new todo title', 'new task');
            if (newTodoTitle == null){
                return;
            }

            let newTodoDescription = prompt('add description', 'none');
            if (newTodoDescription == null){
                newTodoDescription = 'none';
            }

            project.addTodo({title: newTodoTitle, description: newTodoDescription});
            const newTodo = project.todoArr[project.todoArr.length - 1];

            displayTodo(newTodo, todoListUl, project, projDiv);
        })

        projDiv.append(newTaskBtn);
    }

    function createDeleteProjectBtn(){
        const deleteProjectBtn = document.createElement('button');
        deleteProjectBtn.textContent = 'Delete Project';
        deleteProjectBtn.addEventListener('click', (e) => {
            function removeProjectFunctions(){
                project.removeFromLocalStorage();
                projDiv.remove();
            }
        confirmDialog(removeProjectFunctions);
    })
        projDiv.append(deleteProjectBtn);
    }

    createNewTaskBtn();
    createDeleteProjectBtn();

    body.append(projDiv);
}

function displayTodo(todo, ul, project, projectDiv){
        const todoLi = document.createElement('li');
        const todoCheckbox = document.createElement('input', 'type="checkbox"');
        const todoLabel = document.createElement('label');

        todoCheckbox.type = 'checkbox';

        if(todo.checklist){
            todoCheckbox.checked = true;
        }

        todoCheckbox.addEventListener('click', (e) => {
            project.updateCheckedStatus(todo);
        })

        todoLabel.textContent = todo.title;

        function createDetailsButton(){
            const detailsBtn = document.createElement('button');
            const todoDetailsUl = document.createElement('ul');
            todoDetailsUl.className = 'details-ul';
            detailsBtn.textContent = 'details';
            todoDetailsUl.textContent = '';

            function editTodoBtn(todo){
                const editBtn = document.createElement('button');
                editBtn.textContent = 'edit';

                editBtn.addEventListener('click', (e) => {
                    const newText = prompt('new todo title');
                    newText ? todo.title = newText : todo.title = todo.title;

                    project.updateLocalStorage();
                    displayProject(project);
                    projectDiv.remove();
                })

                todoDetailsUl.append(editBtn);
            }

            detailsBtn.addEventListener('click', (e) => {
                if(todoDetailsUl.textContent == ''){
                    for (let key in todo){
                        const detailsLi = document.createElement('li');
                        detailsLi.textContent = `${key}: ${todo[key]}`;
                        todoDetailsUl.append(detailsLi);
                    }
                    const todoRemoveBtn = removeTodoButton();
                    todoLi.append(todoDetailsUl);
                    todoDetailsUl.append(todoRemoveBtn);
                    editTodoBtn(todo);
                }
                else todoDetailsUl.textContent = '';
            })

            todoLi.append(detailsBtn);
        }

        function removeTodoButton(){
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'delete';
            removeBtn.addEventListener('click', (e) => {
                function removeTodoFunctions(){
                    project.removeTodo(todo);
                    todoLi.remove();
                }
                confirmDialog(removeTodoFunctions);
        })

            return removeBtn;
        }

        todoLi.append(todoCheckbox);
        todoLi.append(todoLabel);
        createDetailsButton();
        ul.append(todoLi);
}

const addProjectButton = document.createElement('button');
addProjectButton.textContent = 'New Project';
addProjectButton.addEventListener('click', (e) => {
    const newProjectTitle = prompt('New Project Name: ', 'newProject');
    if (newProjectTitle == null){
        return;
    }
    const newProject = new Project(newProjectTitle);
    displayProject(newProject);
})

body.append(addProjectButton);

function confirmDialog(functions){
        const dialog = document.createElement('dialog');
        const dialogP = document.createElement('p');
        const confirmBtn = document.createElement('button');
        const cancelBtn = document.createElement('button');

        dialog.setAttribute('closedby', 'any');

        dialogP.textContent = 'Remove?';
        confirmBtn.textContent = 'Remove';
        cancelBtn.textContent = 'Cancel';

        confirmBtn.addEventListener('click', (e) => {
            dialog.close();
            dialog.remove();
            functions();
        })

        cancelBtn.addEventListener('click', (e) => {
            dialog.close();
        })

        dialog.append(dialogP);
        dialog.append(confirmBtn);
        dialog.append(cancelBtn);
        body.append(dialog);
        dialog.showModal();
}