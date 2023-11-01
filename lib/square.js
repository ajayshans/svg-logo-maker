const Shapes = require('./shapes.js');

class Square extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        return `
        <svg width="300" height="200">
            <rect x="50" y="10" width="200" height="200" fill="${this.shapeColor}"/>
            <text x="150" y="125" font-size="80" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    };
};

module.exports = Square;