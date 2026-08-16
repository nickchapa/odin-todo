const body = document.querySelector('body');

export function displayProject(project){
    console.log('userinterface.js')
    
    const projectH3 = document.createElement('h3');
    projectH3.textContent = project.title;
    body.append(projectH3);
    console.log(`project: ${project.title}`);

    for(let item of project.todoArr){
        const todoPara = document.createElement('p');
        todoPara.textContent = item.title;
        body.append(todoPara);
        console.log(`item: ${item.title}`);
    }
}

export function addTodoBtn(project){
    // add button next to project title?
    // when clicked, creates input field for new todo details
    const addBtn = document.createElement('button');
    addBtn.textContent = '+';
    body.append(addBtn);

    addBtn.addEventListener('click', (e) => {
        console.log(e.target);
        const newTodo = prompt('create new todo');
        project.addTodo(newTodo);
        const newTodoP = document.createElement('p');
        newTodoP.textContent = newTodo;
        body.append(newTodoP);
    })
}

// create class for new project to display??
// display project + todos