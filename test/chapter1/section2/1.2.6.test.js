var curcular = require('../../../src/chapter1/section2/1.2.6');
var expect = require('chai').expect;


describe('1.2.6的测试', function () {
	it('1.2.6的测试结果', function () {
		expect(curcular('ACTGACG', 'TGACGAC')).to.be.equal(true);
	});
});
