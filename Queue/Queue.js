/*
 * @Author Hossam Houssien
 * @Date   2019
 */

class Queue {
    constructor(initData = []) {
        this.data = initData.slice(0);
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Cannot call peek on an empty stack");
        }
        return this.data.length >= 0 ? this.data[0] : undefined;
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Cannot call pop on an empty stack");
        }

        let poppedItem = this.data[0];
        this.shift(0);
        return poppedItem;
    }

    enqueue(value) {
        this.data.push(value);
    }

    shift(index) {
        for (let i = index; i < this.data.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        this.data.pop();
    }


    isEmpty() {
        return this.data.length === 0;
    }

    size() {
        return this.data.length;
    }


}

let q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

q.dequeue();
q.dequeue();
q.dequeue();


console.log(q);