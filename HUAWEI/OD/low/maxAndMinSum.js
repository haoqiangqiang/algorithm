function maxAndMinSum(len, array, n) {
    const nums = Array.from(new Set(array));
    let result = 0;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < n; i++) {
        result += nums[i];
        result += nums[len - 1 - i];
    }
    return result;
}

console.log(maxAndMinSum(5, [95, 88, 83, 64, 100, 100], 2));