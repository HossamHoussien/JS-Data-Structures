/*
 * @Author Hossam Houssien
 * @Date   2019
 */


class Stack {
  constructor(initData = []) {
    this.data = initData.slice(0);
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Cannot call peek on an empty stack");
    }
    return this.data[this.data.length - 1];
  }

  top() {
    if (this.isEmpty()) {
      throw new Error("Cannot call pop on an empty stack");
    }
    let poppedItem = this.peek(); // Can be removed if pop() method doesn't require to return the popped item
    this.data.pop();
    return poppedItem;
  }

  push(value) {
    this.data.push(value);
  }

  isEmpty() {
    return this.data.length === 0;
  }

  size() {
    return this.data.length;
  }
}