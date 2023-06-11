const trap1 = (height) => {
    let res = 0;
    for (let i = 1; i < height.length; i++) {
        let maxLeft = 0;
        let maxRight = 0;
        for (let m = i - 1; m >= 0; m--) {
            maxLeft = Math.max(maxLeft, height[m]);
        }
        for (let n = i + 1; n < height.length; n++) {
            maxRight = Math.max(height[n], maxRight);
        }
        if (maxLeft > height[i] && maxRight > height[i]) {
            res += Math.min(maxLeft, maxRight) - height[i]
        }
    }
    return res;
}

const trap2 = (height) => {
    const length = height.length;
    let res = 0;
    const leftHeight = new Array(height.length).fill(0);
    leftHeight[0] = height[0];
    for (let i = 1; i < length; i++) {
        leftHeight[i] = Math.max(leftHeight[i - 1], height[i])
    }
    const rightHeight = new Array(height.length).fill(0);
    rightHeight[length - 1] = height[length - 1];
    for (let j = length - 2; j >= 0; j--) {
        rightHeight[j] = Math.max(rightHeight[j + 1], height[j])
    }
    for (let k = 0; k < length; k++) {
        res += Math.min(leftHeight[k], rightHeight[k]) - height[k];
    }
    return res;
}

const trap = (height) => {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0, res = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] > leftMax) {
                leftMax = height[left]
            } else {
                res += leftMax - height[left]
            }
            left++;
        } else {
            if (height[right] > rightMax) {
                rightMax = height[right]
            } else {
                res += rightMax - height[right]
            }
            right--
        }
    }
    return res;
}

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
// const height = [4, 2, 0, 3, 2, 5]

console.log(trap(height));