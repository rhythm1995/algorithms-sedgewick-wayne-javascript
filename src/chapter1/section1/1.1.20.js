/**
 * 递归计算ln(N!)
 */

function factorial(N) {
	if (N === 1) {
		return 1;
	} else {
		return N * factorial(N-1);
	}
}

function ln(N) {
	return Math.log(factorial(N))
}

module.exports = ln;
