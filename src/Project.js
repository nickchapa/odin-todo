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
    }

    logTodoItems(){
        for(let item of this.todoArr){
            console.log(`Project: ${item.projectTitle}, Todo: ${item.title}`, `${item.description}, Finished: ${item.checklist}`);
        }
    }
}