var VisualCounter = require('../../../src/chapter1/section2/1.2.10');
var expect = require('chai').expect;

const VisualCounterObj = new VisualCounter(10, 10);

VisualCounterObj.increment();
VisualCounterObj.increment();
VisualCounterObj.increment();
VisualCounterObj.decrement();

describe('1.2.10', function () {
	it('1.2.10的测试结果', function () {
		expect(VisualCounterObj.counter).to.be.equal(2);
		expect(VisualCounterObj.operation).to.be.equal(4);
	});
});
