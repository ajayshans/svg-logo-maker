const Circle = require('../lib/circle.js');

describe('classCircle', () => {
    it('should produce square logo with user desired text, text color and shape color', () => {
        const circle = new Circle('GHI', 'gray','red');
        expect(circle.render()).toEqual(`
        <svg width="400" height="200">
            <circle cx="200" cy="100" r="100" fill="red"/>
            <text x="200" y="125" font-size="80" text-anchor="middle" fill="gray">GHI</text>
        </svg>`);
    });
});