const Triangle = require('../lib/triangle.js');

describe('classTriangle', () => {
    it('should produce triangular logo with user desired text, text color and shape color', () => {
        const triangle = new Triangle('ABC', 'white','blue');
        expect(triangle.render()).toEqual(`
        <svg width="300" height="200">
            <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>
            <text x="150" y="150" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `);
    })
})