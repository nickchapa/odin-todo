import "./styles.css";
import { Project } from './Project.js';
import * as UI from './userInterface.js';

// localStorage logic

// create default project
// key - projects. value = array of project objects
if(!localStorage.getItem('projects')){
    const storedProjects = {};
    const defaultProject = new Project('proj1', 'default project');
    storedProjects[defaultProject.id] = defaultProject;
    localStorage.setItem('projects', JSON.stringify(storedProjects));
}

// iterate through projects
// for each: setPrototypeOf, displayProject

const storedProjects = JSON.parse(localStorage.getItem('projects'));
for(let project in storedProjects){
    Object.setPrototypeOf(storedProjects[project], Project.prototype);
    UI.displayProject(storedProjects[project]);
};

// ** TODO **
// adjust addTodo/ removeTodo to reflect new localStorage logic
// New Project button should add to current projects in localStorage


//UI.displayProject(localStorage.getItem('projects'))

// let proj1 = new Project('Project 1', 'Project 1 Description');

// if(localStorage.getItem(proj1.id)){
//     proj1 = JSON.parse(localStorage.getItem(proj1.id));
//     Object.setPrototypeOf(proj1, Project.prototype);
// }
// else{
//     localStorage.setItem(proj1.id, JSON.stringify(proj1));
// }

// UI.displayProject(proj1);