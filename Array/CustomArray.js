/*
 * @Author Hossam Houssien
 * @Date   2019
 */


/* export default  */
class CustomArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    // O(1)
    get(index) {
        return this.data[index];
    }

    // O(1)
    push(item) {
        this.data[this.length] = item;
        this.length++;
    }

    // O(1)
    pop() {
        let lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    // O(1)
    peek(first = true) {
        let position = first ? 0 : (this.length - 1);
        return this.data[position];
    }


    // O(n)
    delete(index) {
        if (!this.validIndex(index)) throw new Error('Invalid index');

        let deletedItem = this.data[index];
        this.shift(index);
        return deletedItem;
    }

    // O(n)
    shift(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        this.pop();
    }

    // O(1)
    validIndex(index) {
        return (index >= 0 && index <= this.length - 1);
    }

}

let arr = new CustomArray;
arr.push(1);
arr.push(2);
arr.push(3);

// console.log(arr.peek(false)); // Peek last item
// console.log(arr.peek()); // Peek first item
// arr.pop();

// arr.delete(1);
// arr.delete(1);
// arr.delete(1); // Invalid index throws expection


console.log(arr);