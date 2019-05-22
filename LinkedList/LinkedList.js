/*
 * @Author Hossam Houssien
 * @Date   2019
 * @Note   Doubly LinkedList Implementation
 */

class Node {
    constructor(d = null) {
        this.data = d;
        this.next = null;
        this.previous = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node;
        this.tail = new Node;
        this.length = 0;
    }

    push_back(item) {
        let newNode = new Node(item);

        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    push_front(item) {

        let newNode = new Node(item);

        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.previous = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }


    pop_back() {

        // Hold last node BEFORE tail
        let previousToTail = this.tail.previous;

        // Mark next pointer of previousToTail as null
        previousToTail.next = null;

        // Hold data that will be removed
        let value = this.tail.data;

        // Deallocate the tail from memory
        delete this.tail;

        // Mark the previousToTail as the new tail
        this.tail = previousToTail;

        // Decrease the linkedlist size by 1
        this.length--;

        // Return the deleted value
        return value;
    }


    pop_front() {

        // Hold first node AFTER head
        let nextToHead = this.head.next;

        // Set the previous pointer of nextToHead to null
        nextToHead.previous = null;

        // Hold the deleted value (at head)
        let value = this.head.data;

        // Deallocate head node from memory
        delete this.head;

        // Mark the nextToHead as the new head
        this.head = nextToHead;

        // Decrease the linkedlist size by 1
        this.length--;

        // Return the deleted value
        return value;
    }


    isEmpty() {
        return (this.length === 0);
    }


    size() {
        return this.length;
    }
}

let list = new LinkedList;
list.push_back(5); // 5
list.push_back(10); // 5, 10
list.push_front(15); // 15, 5, 10

list.pop_front();



console.log(list.head);