function isMagicSquare(n, arr) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[0][i];
    }
    for (let i = 1; i < n; i++) {
        let temp = 0;
        for (let j = 0; j < n; j++) {
            temp += arr[i][j]
        }
        if (temp !== sum) {
            return false;
        }
    }
    for (let i = 0; i < n; i++) {
        let temp = 0;
        for (let j = 0; j < n; j++) {
            temp += arr[j][i]
        }
        if (temp !== sum) {
            return false
        }
    }
    let cross1 = 0;
    for (let i = 0; i < n; i++) {
        cross1 += arr[i][i]
    }
    if (cross1 !== sum) return false;
    let cross2 = 0;
    for (let i = 0; i < n; i++) {
        cross2 += arr[i][n - i - 1]
    }
    if (cross2 !== sum) return false;
    return true;
}

function magicSquareFix(n, arr) {
    let result1 = '';
    let result2 = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                for (let l = 0; l < n; l++) {
                    if (i === k && j === l) continue
                    let temp = arr[i][j];
                    arr[i][j] = arr[k][l];
                    arr[k][l] = temp;
                    if (isMagicSquare(n, arr)) {
                        result1 = `${i + 1} ${j + 1} ${arr[i][j]}\n`;
                        result2 = `${k + 1} ${l + 1} ${arr[k][l]}`;
                    } else {
                        let temp = arr[i][j];
                        arr[i][j] = arr[k][l];
                        arr[k][l] = temp;
                    }
                }
            }
        }
    }
    return `${result1}${result2}`
}

// console.log(isMagicSquare(3, [[8, 1, 9], [3, 5, 7], [4, 6, 2]]));
console.log(magicSquareFix(3, [[8, 1, 9], [3, 5, 7], [4, 6, 2]]));