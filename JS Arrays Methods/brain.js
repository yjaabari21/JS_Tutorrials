// JS Array's Methods
//push
//pop
//shift
//unshift
//length
//includes 
//indexOf
//forEach 
//map
//filter

//push
let numbers = [1, 2, 3, 4, 5, 6];
let str = ["text1", "text2", "text3", "text4"];

numbers.push("7");
console.log(numbers);

str.push("text5");
console.log(str);
console.log("-----------------------");

//pop
numbers.pop();
console.log(numbers);
str.pop();
console.log(str);
console.log("-----------------------");

//shift & unshift
numbers.shift();
console.log(numbers);
numbers.unshift(1);
console.log(numbers);
console.log("-----------------------");

//length
console.log(numbers.length);
console.log(str.length);

//includes
console.log(numbers.includes(8));
console.log(str.includes("text1"));
console.log("-----------------------");

//indexof
console.log(numbers.indexOf(2, 2));
console.log(numbers.indexOf(6));
console.log("-----------------------");

//foreach
numbers.forEach(num => {
        console.log(num * 2);
})
console.log("-----------------------");

//map
let newArr = numbers.map(x => x * 3);
console.log(newArr);
console.log("-----------------------");

//filter
console.log(numbers.filter(x => x>=5));










