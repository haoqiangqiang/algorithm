function countArea(n, e, ints) {
    let nums = [];
    for (let i = 0; i < n; i++) {
        nums.push([ints[2 * i], ints[2 * i + 1]])
    }
    let curX = 0;
    let curY = 0;
    let area = 0;
    for (let i = 0; i < n; i++) {
        const [x, y] = nums[i];
        area += (x - curX) * Math.abs(curY);
        curX = x;
        curY += y;

    }
    if (curX < e) {
        area += (e - curX) * Math.abs(curY)
    }
    return area;
}

// console.log(countArea(4, 10, [1, 1, 2, 1, 3, 1, 4, -2]));
console.log(countArea(2, 4, [0, 1, 2, -2]));

// function countArea(n, e, nums) {
//     let curX = 0;
//     let curY = 0;
//     let area = 0;
//     for (let i = 0; i < n; i++) {
//         let [x, y] = nums[i];
//         area += (x - curX) * Math.abs(curY);
//         curX = x;
//         curY += y;
//     }
//     if (curx < e) {
//         area += (e - curX) * Math.abs(curY)
//     }
// }