const Circle = require('./circle.js');
const Triangle = require('./triangle.js');
const Square = require('./square.js');

function generateSVG(data) {
    if (data.shape === 'circle') {
        let chosenShape = new Circle(data.text, data.textColor, data.shapeColor)
        return chosenShape.render()
    } else if (data.shape === 'triangle') {
        let chosenShape = new Triangle(data.text, data.textColor, data.shapeColor)
        return chosenShape.render()
    } else {
        let chosenShape = new Square(data.text, data.textColor, data.shapeColor)
        return chosenShape.render()
    }
};

module.exports = generateSVG;