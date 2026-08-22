// todo item
// title, description, dueDate, priority

export class Todo {
    constructor({title, description, dueDate, priority, notes, checklist, projectTitle} = {}){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
        this.projectTitle = projectTitle;

        this.checklist = false;
    }

    logTodoDetails(){
        console.log(`title: ${this.title}`);
        console.log(`description: ${this.description}`);
        console.log(`dueDate: ${this.dueDate}`);
        console.log(`priority: ${this.priority}`);
        console.log(`notes: ${this.notes}`);
        console.log(`checklist: ${this.checklist}`);
        console.log(`projectTitle: ${this.projectTitle}`);
    }

    changeTitle(){
        this.title = prompt('input new title');
    }

}