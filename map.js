 const numbers = [2,3,4,5,6,7,8];
 const square =[]
 for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
square.push(element * element);
}

console.log(square);
const numbers = [2,3,4,5,6,7,8];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    console.log(result);
}
const numbers = [2,3,4,5,6,7,8];
function square (element){
return element * element;

}
  const result =  numbers.map(square);
 numbers.map(function())
console.log(result);
const numbers = [2,3,4,5,6,7,8];
const result = numbers.map(function(element){
return element * element;

})
console.log(result);
// you can take three parameters in function(element,index,array);
const numbers = [2,3,4,5,6,7,8];

const square = element => element * element;

 const square = x => x * x;

const result = numbers.map(x => x * x);
console.log(result);

const numbers = [2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const result = numbers.filter(x => x % 2==0);
console.log(result);

const nums = [2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const output = nums.filter(x => x % 2);
console.log(output);

const numbers = [2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const result = numbers.filter(x => x > 5);
 console.log(result);

 const numbers = [2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const result = numbers.find(x => x > 5);
 console.log(result);
 
const numbers = [3,4,5,6,7,8,9,10,11,12,13,14,15];
const result = numbers.find(x => x % 2 == 0);
 console.log(result);