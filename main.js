let ColorBox = document.querySelector(".ColorBox");
let Colors = ['black', 'white', 'red', 'green', 'yellow', 'blue', 'brown', 'orange', 'pink', 'purple', 'grey'];
let countColors = 0;


function ChangeColor() {
    ColorBox.style.backgroundColor = Colors[countColors];
    countColors += 1;
    if (countColors == Colors.length) {
        countColors = 0;
    }
}