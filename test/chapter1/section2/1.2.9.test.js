var BinarySearch = require('../../../src/chapter1/section2/1.2.9');
var expect = require('chai').expect;


describe('1.2.9的测试', function () {
	it('1.2.9的测试结果', function () {
		expect(BinarySearch([1, 2, 4, 5, 7, 11, 24], 4)).to.be.equal(3);
		expect(BinarySearch([1, 2, 3], 2)).to.be.equal(1);
});
});
