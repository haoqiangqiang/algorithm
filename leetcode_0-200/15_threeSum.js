const threeSumMax = (nums) => {
    let result = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                // if (nums[i] !== nums[j] && nums[j] !== nums[k] && nums[k] !== nums[i] && nums[i] + nums[j] + nums[k] === 0) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    const arr = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
                    if (result.findIndex((res) => res[0] === arr[0] && res[1] === arr[1] && res[2] === arr[2]) == -1) {
                        result.push(arr)
                    }
                }
            }
        }
    }
    return result;
}

const threeSum = (nums) => {
    const res = [];
    if (nums.length < 3) return res;
    nums.sort((a, b) => a - b);
    if (nums[0] > 0) return res;
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        const target = 0 - nums[i];
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            if (nums[l] + nums[r] === target) {
                res.push([nums[i], nums[l], nums[r]])
                while (i < r && nums[l] == nums[l + 1]) l++;
                while (i < r && nums[r] === nums[r - 1]) r--;
                l++;
                r--;
            } else if (nums[l] + nums[r] > target) {
                r--
            } else {
                l++
            }
        }
    }
    return res;
}

const nums = [-1, 0, 1, 2, -1, -4];
// const nums = [0, 1, 1];

console.log(threeSum(nums));