import { Todo } from './Todo.js';

export class Project {
    constructor(title, projectDescription){
        this.title = title;
        this.projectDescription = projectDescription;
        this.todoArr = [];
        this.id = crypto.randomUUID();
        updateLocalStorage(this);
    }

    addTodo({title: newTitle, description: newDescription, dueDate: newDueDate, priority: newPriority, notes: newNotes, checklist: newChecklist}){
        const todo = new Todo({title: newTitle, description: newDescription, projectTitle: this.title});
        this.todoArr.push(todo);
        updateLocalStorage(this);
    }

    removeTodo(todo){
        const found = this.todoArr.findIndex((element) => element.id == todo.id);
        this.todoArr.splice(found, 1);
        updateLocalStorage(this);
    }

    updateCheckedStatus(todo){
        todo.checklist = !todo.checklist;
        updateLocalStorage(this);
    }

    logTodoItems(){
        for(let item of this.todoArr){
            console.log(`Project: ${item.projectTitle}, Todo: ${item.title}`, `${item.description}, Finished: ${item.checklist}`);
        }
    }

    removeFromLocalStorage(){
        const storedObjects = JSON.parse(localStorage.getItem('projects'));
        delete storedObjects[this.id];
        localStorage.setItem('projects', JSON.stringify(storedObjects));
    }
}

function updateLocalStorage(project){
    const storedProjects = JSON.parse(localStorage.getItem('projects'));
    storedProjects[project.id] = project;
    localStorage.setItem('projects', JSON.stringify(storedProjects));
}