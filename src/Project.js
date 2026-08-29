import { Todo } from './Todo.js';

export class Project {
    constructor(title, projectDescription){
        this.title = title;
        this.projectDescription = projectDescription;
        this.todoArr = [];
    }

    addTodo({title: newTitle, description: newDescription, dueDate: newDueDate, priority: newPriority, notes: newNotes, checklist: newChecklist}){
        const todo = new Todo({title: newTitle, description: newDescription, projectTitle: this.title});
        this.todoArr.push(todo);
        localStorage.setItem('proj1', JSON.stringify(this));
    }

    removeTodo(todo){
        const found = this.todoArr.findIndex((element) => element.id == todo.id);
        this.todoArr.splice(found, 1);
        localStorage.setItem('proj1', JSON.stringify(this));
    }

    logTodoItems(){
        for(let item of this.todoArr){
            console.log(`Project: ${item.projectTitle}, Todo: ${item.title}`, `${item.description}, Finished: ${item.checklist}`);
        }
    }
}