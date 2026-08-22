import "./styles.css";
import { Project } from './Project.js';
import { addTodoBtn, displayProject } from './userInterface.js';

// const todo1 = new Todo('todo number 1');
// todo1.displayTodoTitle();

// const todo2 = new Todo('todo number 2');
// todo2.displayTodoTitle();

const proj1 = new Project('Project 1', 'Project 1 Description');
proj1.addTodo({title: 'display project title', description: 'description1'});
proj1.addTodo({title: 'add button to add todo items', description: 'description2'});
proj1.addTodo({title: 'add checkbox to cross off finished items'});

displayProject(proj1);

//todo1.changeTitle();
//todo1.displayTodoTitle();