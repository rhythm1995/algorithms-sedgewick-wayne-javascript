/**
 * 数组实现队列
 */

class Queue  {
	constructor(dataStore = []) {
		this.dataStore = dataStore;
	}

	enqueue(element) {
		this.dataStore.push(element);
	}

	dequeue() {
		this.dataStore.shift();
	}

	toString() {
		var ret = '';
		this.dataStore.forEach((element) => {
			ret +=  element;
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
