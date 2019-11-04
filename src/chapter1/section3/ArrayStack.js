/**
 * Stack by Array
 */

class Stack {
	constructor(dataStore = []) {
		this.dataStore = dataStore;
	}

	push(element) {
		this.dataStore.push(element);
		return this;
	}

	pop() {
		this.dataStore.pop();
		return this;
	}

	length() {
		return this.dataStore.length;
	}

	toString() {
		let s = '';
		for (var i = 0; i < this.dataStore.length; i++) {
			s += this.dataStore[i];
		}
		return s;
	}

	clear() {
		this.dataStore.length = 0;
		return this;
	}
}

module.exports = Stack;