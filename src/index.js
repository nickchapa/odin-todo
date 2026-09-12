import "./styles.css";
import { Project } from './Project.js';
import * as UI from './userInterface.js';

if(!localStorage.getItem('projects')){
    const storedProjects = {};
    const defaultProject = new Project('proj1', 'default project');
    storedProjects[defaultProject.id] = defaultProject;
    localStorage.setItem('projects', JSON.stringify(storedProjects));
}

const storedProjects = JSON.parse(localStorage.getItem('projects'));
for(let project in storedProjects){
    Object.setPrototypeOf(storedProjects[project], Project.prototype);
    UI.displayProject(storedProjects[project]);
};
