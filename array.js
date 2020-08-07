const nums = [1,2,3,4,5,6,7,8,9];
const part = nums.slice(2,5);
// console.log(part);

const removed = nums.splice(2, 6,22,33,44);
// console.log(removed);
console.log(nums);
const together = nums.join(" hi ");
console.log(together);