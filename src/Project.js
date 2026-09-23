import { Todo } from './Todo.js';

export class Project {
    constructor(title, projectDescription){
        this.title = title;
        this.projectDescription = projectDescription;
        this.todoArr = [];
        this.id = crypto.randomUUID();
        this.updateLocalStorage();
    }

    addTodo({title: newTitle, description: newDescription, dueDate: newDueDate, priority: newPriority, notes: newNotes, checklist: newChecklist}){
        const todo = new Todo({title: newTitle, description: newDescription, projectTitle: this.title, dueDate: newDueDate});
        this.todoArr.push(todo);
        this.updateLocalStorage();
    }

    removeTodo(todo){
        const found = this.todoArr.findIndex((element) => element.id == todo.id);
        this.todoArr.splice(found, 1);
        this.updateLocalStorage();
    }

    updateCheckedStatus(todo){
        todo.checklist = !todo.checklist;
        this.updateLocalStorage();
    }

    logTodoItems(){
        for(let item of this.todoArr){
            console.log(`Project: ${item.projectTitle}, Todo: ${item.title}`, `${item.description}, Finished: ${item.checklist}`);
        }
    }

    updateLocalStorage(){
        const storedProjects = JSON.parse(localStorage.getItem('projects'));
        storedProjects[this.id] = this;
        localStorage.setItem('projects', JSON.stringify(storedProjects));
    }

    removeFromLocalStorage(){
        const storedObjects = JSON.parse(localStorage.getItem('projects'));
        delete storedObjects[this.id];
        localStorage.setItem('projects', JSON.stringify(storedObjects));
    }
}