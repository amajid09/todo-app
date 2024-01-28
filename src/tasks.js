import { Task } from "./task";
class Tasks {
    constructor() {
        this.tasks = [new Task('Complete online Javascript'), new Task('Study web design'),
        new Task('Daily Exercise'), new Task('learn One Concept'), new Task('10 push ups')]
    }

    addAllTasks() {
        const table = document.getElementById('table');
        this.tableClear();
        this.tasks.forEach(task => table.appendChild(task.getTask()));
    }
    addActiveTasks() {
        const table = document.getElementById('table');
        this.tableClear();
        this.tasks.filter(task => task.isActive())
                  .forEach(task => table.appendChild(task.getTask()));
    }
    tableClear() {
        Array.from(table.children).forEach(child => child.remove());
    }
    clear() {
        this.tableClear();
        this.tasks = [];
    }
    addCompletedTasks() {
        const table = document.getElementById('table');
        this.tableClear();
        this.tasks.filter(task => !task.isActive())
                  .forEach(task => table.appendChild(task.getTask()));
    }
    getAllTasks() {
        return this.tasks;
    }
    getActiveTasks() {
        return this.tasks.filter(task => task.isActive());
    }

    getCompletedTasks() {
        return this.tasks.filter(task => !task.isActive());
    }
    addToTasks(task) {
        this.tasks.push(task)
        const table = document.getElementById('table');
        table.appendChild(task.getTask());
    }

    setTasks(tasks) {
        this.tasks = tasks
    } 
}

export { Tasks }