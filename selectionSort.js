// https://www.youtube.com/watch?v=EcYWIYfGiAI

// [9, 3, 2, 0, 10, 1]

function selectionSort(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        let smallest = i;
        for (let j = i+1; j < nums.length; j++) {
            if (nums[j] < nums[smallest]) {
                smallest = j;
            }
        }
        let tmp = nums[smallest];
        nums[smallest] = nums[i];
        nums[i] = tmp;
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

console.log(`Test passed: ${check(selectionSort([9, 3, 2, 0, 10, 1]), [0, 1, 2, 3, 9, 10])}`);
console.log(`Output: ${selectionSort([9, 3, 2, 0, 10, 1])}`);
console.log(`Expected: ${[0, 1, 2, 3, 9, 10]}`);
