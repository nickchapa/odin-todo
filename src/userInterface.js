const body = document.querySelector('body');

export function displayProject(project){
    console.log('userinterface.js')
    console.log(`project: ${project.title}`);
    for(let item of project.todoArr){
        const newP = document.createElement('p');
        newP.textContent = item.title;
        body.append(newP);
        console.log(`item: ${item.title}`);
    }
}

// create class for new project to display??
// display project + todos