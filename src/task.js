class Task {
    constructor(task) {
        this.task = task;
        this.active = true;
        this.input = document.createElement('input');
        this.label = document.createElement('label');
        this.label.textContent = task;
        this.input.className = 'check'
        this.input.type = 'checkbox';
        this.active = 'active';
        this.completed = 'completed'
        this.wrapper = document.createElement('div');
        this.container = document.createElement('div');
        this._addWrapper();
    }
    _addContainer() {
        this.container.className = 'input-container'
        this.container.appendChild(this.wrapper)
    }
    _addWrapper() {
        this.wrapper.className = 'input-wrapper'
        this.wrapper.classList.add('active');
        const checkItems = document.createElement('div');
        checkItems.className = 'check-items';
        checkItems.appendChild(this.input);
        checkItems.appendChild(this.label);
        this.wrapper.appendChild(checkItems)
        const date = document.createElement('div');
        date.classList = 'date'
        date.textContent = '12 Nov';
        this.wrapper.appendChild(date)
        this._addContainer();
    }

    getCheckbox() {
        return this.input;
    }
    isActive() {
        return this.active;
    }

    setActive() {
        this.active = !this.active;
        this.wrapper.classList.toggle(this.completed, !this.active) 
        this.wrapper.classList.toggle(this.active, this.active) 
    }

    getTask() {
        return this.container;
    }
}

export { Task }