Hoisting in Javascript is a concept which lets you call a Function or a Variable before it has been initialised.

### Execution Explained :

- `printMessage();`  will invoke the printMessage function.
- `var num` javascript will be having a memory allocated to num variable and when the code runs from top to bottom, as the variable will not be initialised, there the value in the variable `num` will be `undefined`

```jsx
printMessage(); //this will call/invoke the printMessage function
console.log(num); 
var num = 7;
function printMessage() {
    console.log("Hello World");
}
```

### Execution Explained :

- `printMessage();`  Will throw an ReferenceError exception saying, *function not defined*, because printMessage is treated here as a variable when written in a arrow function format.
- `var num` JavaScript will throw an error of ReferenceError, *variable not defined*, as the variable was not defined and hence the memory was not reserved for the variable `num`

```jsx
printMessage();
console.log(num);

var printMessage= () => {
    console.log("Hello World");
}
```