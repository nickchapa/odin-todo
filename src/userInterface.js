const body = document.querySelector('body');

export function displayProject(project){
    console.log('userinterface.js')
    
    const projectH3 = document.createElement('h3');
    projectH3.textContent = project.title;
    body.append(projectH3);
    console.log(`project: ${project.title}`);

    for(let item of project.todoArr){
        const todoPara = document.createElement('p');
        todoPara.textContent = item.title;
        body.append(todoPara);
        console.log(`item: ${item.title}`);
    }
}

// create class for new project to display??
// display project + todos