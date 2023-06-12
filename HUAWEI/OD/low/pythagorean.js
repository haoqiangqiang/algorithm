function isCoprime(x, y) {
    if (x == 1 || y == 1) {
        return true;
    } else {
        while (true) {
            temp = x % y;
            if (temp == 0) {
                break;
            } else {
                x = y;
                y = temp;
            }
        }
        return y == 1 ? true : false;
    }
}

function isCoprime(x, y) {
    if (x == 1 || y == 1) {
        return true;
    } else {
        while (true) {
            temp = x % y;
            if (temp == 0) {
                break;
            } else {
                x = y;
                y = temp;
            }
        }
        return y == 1 ? true : false;
    }
}

function pythagorean(start, end) {
    let result = []
    for (let i = start; i < end; i++) {
        for (let j = i + 1; j < end; j++) {
            for (let k = j + 1; k < end; k++) {
                if (isCoprime(i, j) && isCoprime(j, k) && isCoprime(i, k)) {
                    if (k * k == (i * i + j * j)) {
                        result.push([i, j, k])
                    }
                }
            }
        }
    }
    if (result.length == 0) {
        return 'NA';
    } else {
        return result.join('\n')
    }
}

console.log(pythagorean(1, 20));
