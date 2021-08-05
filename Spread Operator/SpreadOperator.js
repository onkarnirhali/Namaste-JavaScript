let arr1 = ['Hello', 'How are you?', 'Where do you live?'];
let arr2 = ['hi', 'I am good', 'I live in Pune'];

// so if we want to add arr2 to arr1 
// and approach in the below way 
let arr1 = ['Hello', 'How are you?', 'Where do you live?', arr2];
// the output will be an array inside of an array i.e arr2 inside of arr1
['Hello', 'How are you?', 'Where do you live?',['hi', 'I am good', 'I live in Pune']];

// if we use the spread operator
let arr1 = ['Hello', 'How are you?', 'Where do you live?', ...arr2];
// then the output will be 
let arr1 = ['Hello', 'How are you?', 'Where do you live?', 'hi', 'I am good', 'I live in Pune'];