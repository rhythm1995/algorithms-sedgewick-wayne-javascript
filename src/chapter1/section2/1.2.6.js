/**
 * 如果字符串s中的字符循环任意位后，能得到字符串t，那么s被称作t的回环变位
 */

function curcular(s, t) {
	return (s.length === t.length) && (s+s).includes(t);
}

module.exports = curcular;