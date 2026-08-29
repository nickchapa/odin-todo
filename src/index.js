import "./styles.css";
import { Project } from './Project.js';
import * as UI from './userInterface.js';

let proj1 = new Project('Project 1', 'Project 1 Description');

if(localStorage.getItem('proj1')){
    proj1 = JSON.parse(localStorage.getItem('proj1'));
    Object.setPrototypeOf(proj1, Project.prototype);
}
else{
    localStorage.setItem('proj1', JSON.stringify(proj1));
}

UI.displayProject(proj1);