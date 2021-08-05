## How does function execution works?

```jsx
var num = 02;
first();
second();
console.log(num);

function first() {
    var num = 01;
    console.log(num);
}

function second() {
    var num = 03;
    console.log(num);
}
```

### Execution Explained :

- Initially the Global Execution Context will be pushed into the call stack when the program goes to the **Line 1** of the code, after that memory will be allocated to the variable `num` , `first()`,`second()`. When the Line 1 is executed, the value of the `num` would have been replaced by `02` which will be in the local context.
- When moved to **Line 2,** a new  execution context will be created in the call stack (*this new execution context for the `first()` will have its own memory and code space; or for laymans term it will have it own environment of the call stack*) and memory will be allocated for `variable num` as it is declared and initialised in the function `first()`. So, right now the `num` will have the value `undefined` on 1st iteration.  After that the value of the `num` will be `01` as per the value initialised in the function. Here the console log will print the value of `num` as `01`
- Similar to the **Line 2,** on the **Line 3** the function will be executed in similar way.
- After the execution of the function the execution context will be deleted and hence the values stored in the memory of the variable `num` will also be deleted. This is done after every execution of the function is finished.
- On **Line 4,**  the console.log will log the value of the `num` as `02` as the previous values from `first()` and `second()` were deleted after their respective execution was finished. Therefore, the value `02` was present in the Global Context and hence it was Logged in the console.