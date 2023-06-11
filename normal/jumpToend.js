function canJumpToEnd(arr) {
    const n = arr.length;  // 获取字符数组长度
    let rightMost = 0;    // 设置最长延申
    for (let i = 0; i < n; ++i) {
        if (i <= rightMost) {
            rightMost = Math.max(rightMost, i + arr[i]); // 更新最长延申
            if(rightMost >= n - 1) {                     // 若可以到最右，返回 true, 否则返回 false
                return true;              
            }
        }
    }
    return false;
}

// arr = [3, 2, 1, 2, 4];
// arr = [3, 2, 1, 0, 4];
arr = [1, 1, 0, 1, 4];


console.log(canJumpToEnd(arr));