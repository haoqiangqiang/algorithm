function isCompileNum(number) {
    if(number == 1) return false
    for(let i = 2; i < number; i++) {
        if(number % i == 0) {
            return false
        }
    }
    return true;
}
function primeNumSum(number) {
    let result = -1;
    for(let i = 1; i < number; i++) {
        if((number % i == 0) && isCompileNum(i) && isCompileNum(number / i)) {
            result = i;
            break;
        }
    }
    if(result == -1) {
        return `-1 -1`
    } else {
        return `${result} ${number / result}`
    }
}

console.log(primeNumSum(143));