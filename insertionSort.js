//  [9, 3, 2, 0, 10, 1]

function insertionSort(nums) {
    for (let j = 1; j < nums.length; j++) {
        for (let i = j - 1; i >= 0; i--) {
            if (nums[i+1] < nums[i]) {
                let tmp = nums[i+1];
                nums[i+1] = nums[i];
                nums[i] = tmp;
            }
        }
    }
    return nums;
}

///////////////////////////////////////////////////////////////////

function check(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

console.log(`Test passed: ${check(insertionSort([9, 3, 2, 0, 10, 1]), [0, 1, 2, 3, 9, 10])}`);
console.log(`Input:  ${[9, 3, 2, 0, 10, 1]}`);
console.log(`Output: ${insertionSort([9, 3, 2, 0, 10, 1])}`);
console.log(`Expected: ${[0, 1, 2, 3, 9, 10]}`);