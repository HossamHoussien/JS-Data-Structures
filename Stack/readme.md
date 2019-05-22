# Stack JS

Stack Data Structure implementation using non-primitive array as an internal data structure

#####Why using array?

-   Stack can be implemented using **LinkedList** or **Array** as an underlying data structure with fair performance.
-   Exploiting the **spatial locality** of array, so the operations will be relatively faster.
-   Using the built-in methods provided by array facilitate implementation of Stack.

###Technical Notes
This implementation using ES6 syntax, so make sure to use a transpiler if you decided to use it in production



```js
export default class Stack // ES6 Modules
```

```js
constructor(initData = []) {
// Deep clone the passed args
// To prevent "Assignment By Reference"
}
```

###Available Methods

```js
peek() {...}
// Returns the last inserted element
// Throw an exception if the stack is empty
```

```js
pop() {...}
// Delete the last inserted element and return it
// Throw an exception if the stack is empty
```

```js
push(value) {...} // Append an element to the stack
```

```js
isEmpty() {...}  // Determines whether the stack is empty or not
```

```js
size() {...} // Returns the number of elements in the stack
```

###Usage

```js
import Stack from "./relative-or-absolute-path-to-Stack.js";
```

###Demo

```js
import Stack from "./DS/Stack/Stack.js";

let myStack = new Stack(); // new Stack([1,2,3])
myStack.push(1); // 1           <= top
myStack.push(2); // 1, 2        <= top
myStack.push(3); // 1, 2, 3     <= top

myStack.peek(); // 3
myStack.size(); // 3
myStack.isEmpty(); // false

let top;
top = myStack.pop(); // 3
top = myStack.pop(); // 2
top = myStack.pop(); // 1
```
