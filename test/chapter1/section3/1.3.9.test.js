const supplyBrackets = require('../../../src/chapter1/section3/1.3.9');
const assert = require('power-assert');

const test1 = '1+2)';
const test2 = '1+2)*3-4)*5-6)))';

describe('1.3.9', function () {
	it('1.3.9的测试结果', () => {
		assert(supplyBrackets(test1) === '(1+2)');
		assert(supplyBrackets(test2) === '((1+2)*((3-4)*(5-6)))');
  });
});
