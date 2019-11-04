var Queue = require('../../../src/chapter1/section3/ArrayStack');
var expect = require('chai').expect;

describe('1.3.ArrayStack', function () {
	let testQueue = new Queue();
	testQueue.push(1);
	testQueue.push(2);
	testQueue.push(3);
	testQueue.push(4);
	testQueue.pop();

	it('1.3.ArrayStack——toString()的测试结果', function () {
		expect(testQueue.toString()).to.be.equal('123');
	});
	it('1.3.ArrayStack——length()的测试结果', function () {
		expect(testQueue.length()).to.be.equal(3);
	});
	it('1.3.ArrayStack——clear()的测试结果', function () {
		expect(testQueue.clear().length()).to.be.equal(0);
	});
});
