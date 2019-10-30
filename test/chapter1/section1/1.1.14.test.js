var lg = require('../../../src/chapter1/section1/1.1.14');
var expect = require('chai').expect;

describe('1.1.14', function () {
	it('1.1.14的测试结果', function () {
		expect(lg(5)).to.be.equal(2);
		expect(lg(16)).to.be.equal(4);
	});
});
