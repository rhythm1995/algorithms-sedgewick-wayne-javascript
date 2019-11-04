var Queue = require('../../../src/chapter1/section3/NodeQueue');
var expect = require('chai').expect;

describe('1.3.NodeQueue', function () {
	let testQueue = new Queue();
	testQueue.enqueue(1);
	testQueue.enqueue(2);
	testQueue.enqueue(3);
	testQueue.enqueue(4);
	testQueue.denqueue();

	it('1.3.NodeQueue——toString()的测试结果', function () {
		expect(testQueue.toString()).to.be.equal('234');
	});
	it('1.3.NodeQueue——length()的测试结果', function () {
		expect(testQueue.length).to.be.equal(3);
	});
	it('1.3.NodeQueue——clear()的测试结果', function () {
		expect(testQueue.clear().length).to.be.equal(0);
	});
});
