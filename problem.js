// function to find the sum of two numbers which is equal to  target value
// time complexity : O(n)
// space complexity : O(1)
function targetSum(arr, target){
    arr.sort((a,b)=> a - b); // sorting the array 
    let left = 0;   // defining the value of left pointer
    let right = arr.length - 1; // defining the value of right pointer
    let res = []; // array to store result

    while(left < right){   //while left pointer is less than right pointer's value this loop will work
        
        if(arr[left] + arr[right] === target){
            res.push([arr[left],arr[right]]); // if two values are equal to target, push into res array
            left++;     // increment in left pointer
            right--;    // decrement in right pointer to find another combination
        }
        else if(arr[left] + arr[right] < target){
            left++; // if target is greater than sum, increment in left pointer
        }
        else{
            right--; // if target is less than sum, decrement in right pointer
        }
    }
    return res; // return the result
}

// function to find the combinations of values which sums target*2
function findCombination(arr, target) {
    let doubleTarget = target * 2;  // double the  target
    let result = [];    // array to store result
  
    for (let i = 0; i < arr.length; i++) {
        let combination = [];
        let sum = arr[i];
  
        for (let j = i + 1; j < arr.length; j++) {
            sum += arr[j];
            combination.push(arr[j]);
            if (sum === doubleTarget) {
                result.push([arr[i]].concat(combination));
            }
        }
    }
  
    return result;
}

// defining the values of arr and target
let arr = [1, 3, 2, 2, -4, -6, -2, 8];
let target = 4;

let ans = targetSum(arr, target); // storing the result returned from targetSum function
let flattenArr = ans.flat(); // flatten the ans
flattenArr.sort((a,b) => a - b); // sorting the flatten array
// console.log("First Combination For “4” :", ans); // consoling the the value of first combination
// console.log("Merge Into a single Array :", flattenArr); // consoloing the values of merged array

let combinationRes = findCombination(arr,target) ;
console.log("Second Combination For “8” :", combinationRes); // consoling the 



