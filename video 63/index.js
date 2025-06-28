let arr=[2,5,3,6,7]
console.log(arr);
arr[0]=455;
console.log(arr); //array is mutable
let s="supti"
console.log(s);
s[0]="harry"
console.log(s); //string is immutable

console.log(arr,typeof arr); //array is an object
console.log(arr.length); //length of array
console.log(arr.toString(),typeof arr); //convert array to string
console.log(arr.join(" and ")); //join array elements with a string
console.log(arr.pop()); //remove last element and return it

let numbers = [1, 2, 3, 4, 5] 
console.log(numbers);
numbers.splice(1, 2); //remove 2 elements starting from index 1 
console.log(numbers); // [1, 4, 5]   
numbers.splice(1, 3); //remove 3 elements starting from index 1
console.log(numbers); // [1]  

n=[4,5,6,7,2];
console.log(n);
n.splice(1, 3, 222, 333); //remove 3 elements starting from index 1 and add 222, 333
console.log(n); 