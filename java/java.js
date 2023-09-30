'use strict';

function c(arg) {
    console.log(arg);
}

//________________________________ Classes ________________________________________

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        c(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

const div = new ColoredRectangleWithText(25, 10, 'Hallo World', 'red');
div.showMyProps();
console.log(div.calcArea());

// c(long.calcArea());
// c(square.calcArea()); 