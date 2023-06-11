function twoSum(nums, target) {
    const keys = new Map()
    for (let i = 0; i < nums.length; i++) {
        const value = target - nums[i]
        if (keys.has(value)) {
            return [keys.get(value), i]
        } else {
            keys.set(nums[i], i)
        }
    }
}

 const nums = [2, 7, 11, 15];
 const target = 9;

 console.log(twoSum(nums, target));