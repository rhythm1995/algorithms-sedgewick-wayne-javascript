/**
 * 数组实现队列
 */

class Queue  {
	constructor(dataStore = []) {
		this.dataStore = dataStore;
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
		return this.dataStore.length;
	}

	clear() {
	 this.dataStore.length = 0;
	 return this;
	}
}

module.exports = Queue;
