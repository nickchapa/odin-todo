// todo item
// title, description, dueDate, priority

export class Todo {
    constructor(title, description, dueDate, priority, notes, checklist){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
        this.checklist = false;
    }

    displayTodoTitle(){
        console.log(`title: ${this.title}`);
    }

    changeTitle(){
        this.title = prompt('input new title');
    }

}