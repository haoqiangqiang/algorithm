const maxArea = (height) => {
    if (height.length < 2) return 0
    let max = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            const area = Math.min(height[i], height[j]) * (j - i)
            max = Math.max(max, area)
        }
    }
    return max
}

const maxArea2 = (height) => {
    let l = 0;
    let r = height.length - 1;
    let ans = 0
    while (l < r) {
        const area = Math.min(height[l], height[r]) * (r - l)
        ans = Math.max(area, ans)
        if (height[l] < height[r])
            l++
        else
            r--
    }
    return ans;
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// const height = [1, 1];

// console.log(maxArea(height))
console.log(maxArea2(height))