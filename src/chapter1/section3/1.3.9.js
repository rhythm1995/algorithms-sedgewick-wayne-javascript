/**
 * 编写一段程序，从标准输入得到一个缺少左括号的表达式并补全扩后之后的中序表达式，例如
 * 给定输入：1+2)*3-4)*5-6)))
 * 期望输出：((1+2)*((3-4)*(5-6)))
 */

var supplyBrackets = function(str) {
	const operationList = ['+', '-', '*', '/'];

	// 双栈法
	const numberStack = [];
	const operationStack = [];

	for (var i = 0; i < str.length; i++) {
		let c = str.charAt(i);
		if (operationList.includes(c)) {
			operationStack.push(c);
		} else if (c === ')') {
			let a = numberStack.pop();
			let b = numberStack.pop();
			let operation = operationStack.pop();
			let newNum = '(' + b + operation + a + ')';
			numberStack.push(newNum);
		} else {
			numberStack.push(c);
		}
	}

	return numberStack.join('');
};

module.exports = supplyBrackets;