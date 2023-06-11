const countSubarrays = (nums, k) => {
    const n = nums.length;
    let kIndex = -1;
    for(let i = 0; i < n; i++) {
        if(nums[i] === k) {
            kIndex = i;
            break;
        }
    }
    let ans = 0;
    const counts = new Map();
    counts.set(0, 1);
    let sum = 0;
    const sign = (num) => {
        if(num === 0) {
            return 0;
        }
        return num > 0 ? 1 : -1;
    }
    for (let i = 0; i < n; i++) {
        sum += sign(nums[i] - k);
        if(i < kIndex) {
            counts.set(sum, (counts.get(sum) || 0) + 1);
        } else {
            const prev0 = (counts.get(sum) || 0);
            const prev1 = (counts.get(sum - 1) || 0);
            ans += prev0 + prev1;
        }
    }
    return ans;
}