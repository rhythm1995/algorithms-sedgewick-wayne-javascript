const judge = require('../../../src/chapter1/section3/1.3.4');
const assert = require('power-assert');

const test1 = '()';
const test2 = '[([])]';
const test3 = '{{}{)';
const test4 = '[(])';

describe('1.3.4', function () {
	it('1.3.4的测试结果', () => {
		assert(judge(test1) === true);
		assert(judge(test2) === true);
		assert(judge(test3) === false);
		assert(judge(test4) === false);
  });
});
