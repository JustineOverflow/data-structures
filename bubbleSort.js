function bubbleSort(nums) {

    for (let i = 0; i < nums.length; i++) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > nums[i + 1]) {
                let tmp = nums[i + 1];
                nums[i + 1] = nums[i];
                nums[i] = tmp;
            }
        }
    }

    return nums
}

/////////////////////////////////////////////////////////////

function check(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

console.log(`Test passed: ${check(bubbleSort([9, 3, 5, 0, 10, 23]), [0, 3, 5, 9, 10, 23])}`);
console.log(`Output: ${bubbleSort([9, 3, 5, 0, 10, 23])}`);
console.log(`Expected: ${[0, 3, 5, 9, 10, 23]}`);
