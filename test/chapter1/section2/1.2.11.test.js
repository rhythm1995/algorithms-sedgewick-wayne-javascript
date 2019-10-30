var SmartDate = require('../../../src/chapter1/section2/1.2.11');
var expect = require('chai').expect;

describe('1.2.11', function () {
	it('1.2.11的测试结果', function () {
		const SmaerDateObj1 = new SmartDate(2018,10,22);
		const SmaerDateObj2 = new SmartDate(2000,2,29);


		expect(SmaerDateObj1.isDateValid()).to.be.equal(false);
		expect(SmaerDateObj2.isDateValid()).to.be.equal(false);
		expect(SmaerDateObj2.isLeap()).to.be.equal(true);
	});
});

