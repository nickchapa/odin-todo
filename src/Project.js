import { Todo } from './Todo.js';

export class Project {
    constructor(title, description){
        this.title = title;
        this.description = description;
        this.todoArr = [];
    }

    addTodo(title, description, dueDate, priority, notes, checklist){
        const todo = new Todo(title, description, dueDate, priority, notes, checklist);
        this.todoArr.push(todo);
    }

    logTodoItems(){
        for(let item of this.todoArr){
            console.log(`Project: ${this.title}, Todo: ${item.title}`, `${item.description}`);
        }
    }
}