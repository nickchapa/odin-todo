import "./styles.css";
import { Project } from './Project.js';
import { displayProject } from './userInterface.js';

// const todo1 = new Todo('todo number 1');
// todo1.displayTodoTitle();

// const todo2 = new Todo('todo number 2');
// todo2.displayTodoTitle();

const proj1 = new Project('default', 'Default Project');
proj1.addTodo('display project title', 'description1');
proj1.addTodo('add button to add todo items', 'description2');
proj1.logTodoItems();

displayProject(proj1);

//todo1.changeTitle();
//todo1.displayTodoTitle();