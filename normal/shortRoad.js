function shortRoad(road) {
    if (road.length < 1) {                          // 判断 0 现象
        return 0
    };
    const row = road.length;                        // 获取行数
    const col = road[0].length;                     // 获取列数
    let data = road.map(row => row.map(col => 0));
    data[0][0] = road[0][0];                        // 创建一个相同的数组，并设置起始点
    for (let i = 1; i < row; ++i) {
        data[i][0] = data[i - 1][0] + road[i][0];   // 设置第一行
    }
    for (let j = 1; j < col; ++j) {
        data[0][j] = data[0][j - 1] + road[0][j];   // 设置第一列
    }
    for (let m = 1; m < row; ++m) {
        for (let n = 1; n < col; ++n) {
            data[m][n] = Math.min(data[m][n - 1] + road[m][n], data[m - 1][n] + road[m][n]);    //  设置最小的距离为点
        }
    }
    // console.log(data);
    return data[row -1][col - 1];                    // 最右方为所求距离
}

// const map = [
//     [1, 2, 3],
//     [6, 5, 6],
//     [2, 3, 5],
// ]

// const map = [
//     [1, 3, 1],
//     [1, 5, 1],
//     [1, 2, 1],
// ]

// const map = [
//     [1, 3, 1],
//     [1, 5, 1],
//     [4, 2, 1],
// ]

const map = [
    [1, 2, 3],
    [4, 5, 6],
]



console.log(shortRoad(map))