// 正确的括号
var judge = function(str) {
  var map = {
		')': '(',
		']': '[',
		'}': '{'
	}
	var stack = [];
	for (var i = 0; i < str.length; i++) {
		var c = str.charAt(i);
			if (c in map) {
				var template = stack.length !== 0 ? stack.pop() : '#';
				if (template !== map[c]) {
					return false;
				}
			} else {
				stack.push(c);
			}
    }
	return stack.length === 0;
};

module.exports = judge;