import './style.css';
import { Toggle } from "./toggle";

import { Tasks } from './tasks';
import { Task } from './task';

const tasks = new Tasks();


function addTask() {
    const form = document.getElementById('create')
    console.log(form)


    form.addEventListener('submit',(event) => {
        event.preventDefault();

        const data = new FormData(event.target);                                                  
        const task = data.get("task");
        if (task != '') {
            const newTask = new Task(task);
            tasks.addToTasks(newTask);
            displayItems(tasks.getAllTasks().length)
            console.log(task)
        }
    })
}


function toggleTheme() {
    const toggle = new Toggle();
    const button = toggle.getButton()
    button.addEventListener('click', (event) => {
        toggle.replaceIcon();
        toggle.heading();
        toggle.background();
    })
}

function checkbox() {
    let count = tasks.getActiveTasks().length;
    tasks.getAllTasks().forEach(task => {
        task.getCheckbox().addEventListener('click', () => {
            console.log('clicker')
            task.setActive();
            let count = tasks.getActiveTasks().length;       
            console.log(count)
            displayItems(count) 
        })
    })
    return count;
}


function displayItems(count) {
    const item = document.getElementById('items-uncompleted');
    item.textContent = `${count} items left`
}


function displayContents(content) {
    if (content.toLowerCase() == "active") {
        tasks.addActiveTasks();
    } else if (content.toLowerCase() == 'completed') {
        tasks.addCompletedTasks();
    } else {
        tasks.addAllTasks();
    }
    console.log(content.toLowerCase())
}

function activateLink() {
    const links = document.getElementsByClassName('link');
    const grey = "color:hsl(234, 39%, 85%);";
    const purple = "color: hsl(258, 45%, 44%);"
    Array.from(links).forEach(link => {
        if (link.textContent == "All") {
            link.style = purple;
        } else {
            link.style = grey; 
        }
        link.addEventListener('click', () => {
            const links = document.getElementsByClassName('link');
            Array.from(links).forEach(li => li.style = grey) 
            link.style = purple 
            displayContents(link.textContent)
        })
    })
}
function clearItems() {
    const clear = document.getElementById('clear');
    clear.addEventListener('click', () => {
        let checked = tasks.getCompletedTasks().length > 0;
        console.log(checked)
        if (!checked) {
            tasks.clear();
        } else {

            tasks.setTasks(tasks.getActiveTasks());
            tasks.addActiveTasks();
        }
        const itemsLeft = tasks.getActiveTasks().length;
        displayItems(itemsLeft)
    })
}
clearItems();
activateLink()
toggleTheme()
displayItems(checkbox());
addTask();


displayContents('all')