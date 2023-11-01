const Shapes = require('./shapes.js');

class Circle extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        return `
        <svg width="400" height="200">
            <circle cx="200" cy="100" r="100" fill="${this.shapeColor}"/>
            <text x="200" y="125" font-size="80" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
};

module.exports = Circle;