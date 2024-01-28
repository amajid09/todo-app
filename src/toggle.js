class Toggle{
    constructor() {
        this.button = document.getElementById('toggle');
        this.toggle = false;
    }
    replaceIcon() {
        this.button.removeChild(this.button.children[0]);
        const image = document.createElement('img');
        image.src = !this.toggle ? './images/icon-moon.svg' : './images/icon-sun.svg';
        this.button.appendChild(image);
        this.toggle = !this.toggle
    }

    background() {
        console.log('change the image of the top background');
        this._toggleImageOfTopBackground();
        console.log("Cnange the color of the bottom background")
        this._toggleColorOfBottomBackground();
    }
    heading() {
        const h1 = document.querySelector('h1');
        const black = "color: black;";
        const white = 'color: white;'
        h1.style = this.toggle ? black: white;
    }

   
    _toggleImageOfTopBackground() {
        const background = document.getElementById('top-background');
        const dark = "background-image: url('./images/bg-desktop-dark.jpg');"
        const light = "background-image: url('./images/bg-desktop-light.jpg');"
        background.style = this.toggle ? light : dark;
    }

    _toggleColorOfBottomBackground() {
        const background = document.getElementById('bottom-background');
        const light = "background-color: hsl(0, 0%, 98%);"
        const dark = "background-color: hsl(235, 21%, 11%);"
        background.style = this.toggle ? light : dark;
    }
    getButton() {
        return this.button;
    }
}


export { Toggle }