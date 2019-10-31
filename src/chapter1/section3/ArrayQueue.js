/**
 * 数组实现队列
 */

class Queue  {
	constructor() {
		this.dataStore = [];
    this.front = front;
    this.back = back;
    this.length = length;
	}

	enqueue(item) {
		this.dataStore.push(item);
	}

	dequeue() {
		this.dataStore.shift();
	}

	toString() {
		var ret = '';
		this.dataStore.forEach((item) => {
			ret +=  item;
		});
		return ret;
	}

	length() {
		return this.length;
	}

	clear() {
		this.length = 0;
	}
}