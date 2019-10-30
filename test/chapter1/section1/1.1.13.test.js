var transposit = require('../../../src/chapter1/section1/1.1.13');
var expect = require('chai').expect;

describe('1.1.13', function () {
	it('1.1.13的测试结果', function () {
		expect(JSON.stringify(transposit([[1, 2, 3], [1, 2, 3], [1, 2, 3]]))).to.be.equal(JSON.stringify([[1, 1, 1], [2, 2, 2], [3, 3, 3]]));
	});
});
