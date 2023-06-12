const rotate = (matrix) => {
    const n = matrix.length
    const newMatrix = new Array(n).fill(0).map(() => (new Array(n).fill(0)))
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            newMatrix[j][n - i - 1] = matrix[i][j] 
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = newMatrix[i][j];
        }
    }
    console.log(matrix);
}

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// console.log(rotate(matrix));
rotate(matrix);