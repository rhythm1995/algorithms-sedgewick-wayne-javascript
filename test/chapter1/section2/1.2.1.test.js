var range = require('../../../src/chapter1/section2/1.2.1').range;
var Point2D = require('../../../src/chapter1/section2/1.2.1').Point2D;
var expect = require('chai').expect;

const point1 = new Point2D(0, 0);
const point2 = new Point2D(2, 2);

describe('1.2.1', function () {
	it('1.2.1的测试结果', function () {
		expect(range(point1, point2)).to.be.equal(2.8284271247461903);
	});
});
