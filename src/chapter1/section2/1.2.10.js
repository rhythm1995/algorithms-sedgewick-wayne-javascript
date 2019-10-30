/**
 * 实现一个类VisualCounter,支持+1和-1操作。接受两个参数N和max，其中N制定了操作的最大次数，max指定了计数器的最大绝对值
 */

class VisualCounter {
	constructor(N, max) {
		this.N = N;
		this.max = max;
		this.counter = 0;
		this.operation = 0;
	}

	increment() {
		if (this.operation < this.N && this.counter < this.max) {
			this.operation ++;
			this.counter ++;
		}
	}

	decrement() {
		if (this.operation < this.N && Math.abs(this.counter) < this.max) {
			this.operation ++;
			this.counter --;
		}
	}
}

module.exports = VisualCounter;
