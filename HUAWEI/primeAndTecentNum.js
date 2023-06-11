function isPrimeNum(num) {
    if (num == 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) return false
    }
    return true;
}

function isTecent(array) {
    let result = true;
    for (let i = 0; i <= array.length / 2; i++) {
        if (array[i] !== array[array.length - 1 - i]) {
            result = false
        }
    }
    return result;
}

function primeAndTecentNum(num) {
    const result = [];
    for (i = 1; i <= num; i++) {
        if (isPrimeNum(i)) {
            numStr = i.toString().split('');
            if (isTecent(numStr)) {
                result.push(i)
            }
        }
    }
    let resultStr = `${result.length}`;
    for (let i = 0; i < result.length; i++) {
        resultStr +=  `,${result[i]}`;
    }
    return resultStr;
}

console.log(primeAndTecentNum(102))