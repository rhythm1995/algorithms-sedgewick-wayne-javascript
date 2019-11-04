/**
 * 链表实现队列
 */

class Node {
	constructor(element) {
		this.element = element;
    this.next = null;
	}
}

class Queue {
	constructor() {
		this.front = null; // head of Queue
		this.rear = null; // tail of Queue
		this.length = 0; // length of Queue
	}

	push(elemenet) {
		let current = null;
		let node = new Node(elemenet);

		if (this.length === 0) {
			this.front = node;
			this.rear = node;
			this.length ++;
			return true;
		} else {
			current = this.rear;
			current.next = node;
			this.rear = node;
			this.length ++;
			return true;
		}
	}

	pop() {
		let current = null;
		
		if (this.length !== 0) {
			current = this.front;
			this.front = current.next;
			this.length --;
			return true;
		} else {
			return null;
		}
	}

	toString() {
		var str = '',
		current = this.front;

		while(current){
			str += current.element;
			current = current.next;
		}

		return str;
	};

	clear() {
		this.front = null;
		this.rear = null;
		this.length = 0;
		return this;
	}

}

module.exports = Queue;
