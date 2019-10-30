/**
 * 编写一个静态方法lg，接受一个整数参数N，返回不大于log2(N)的最大整数，不要使用Math库
 */

function lg(N) {
	let i = N - 1;
	while(i * i > N) {
		i--;
	}
	return i;
}

module.exports = lg;
