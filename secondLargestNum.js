function getSecondLargest(nums) {
    // Complete the function
    nums.sort((a,b)=> a - b);
    const uniqueNumbers = [...new Set(nums)];
    console.log(uniqueNumbers[uniqueNumbers.length - 2]);
}
let nums=[2,3,6,6,5];
getSecondLargest(nums);

// A Set is a built-in JavaScript object that only stores unique values.
// When you pass an array into a Set, it automatically removes duplicates.

// The spread operator ... expands the Set into individual values.

