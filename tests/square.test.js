const Square = require('../lib/square.js');

describe('classSquare', () => {
    it('should produce square logo with user desired text, text color and shape color', () => {
        const square = new Square('DEF', 'black','green');
        expect(square.render()).toEqual(`
        <svg width="300" height="200">
            <rect x="50" y="10" width="200" height="200" fill="green"/>
            <text x="150" y="125" font-size="80" text-anchor="middle" fill="black">DEF</text>
        </svg>`);
    });
});