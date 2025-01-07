class Node {
  constructor(data) {
    this.data = data;
    this.tail = null;
  }
}

class LinkedList {
  constructor(val) {
    const newNode = new Node(val);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

let first = new LinkedList(30);
first = new LinkedList(40);
first.push(50);
console.log(first);
