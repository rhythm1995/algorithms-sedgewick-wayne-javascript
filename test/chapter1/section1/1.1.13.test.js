var transposit = require('../../../chapter1/section1/src/1.1.13');
var expect = require('chai').expect;

describe('1.1.13转置矩阵的测试', function () {
	it('转置矩阵的测试', function () {
		expect(JSON.stringify(transposit([[1, 2, 3], [1, 2, 3], [1, 2, 3]]))).to.be.equal(JSON.stringify([[1, 1, 1], [2, 2, 2], [3, 3, 3]]));
	});
});
