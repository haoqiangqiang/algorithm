const letterCombinations1 = (digits) => {
    const keys = new Map();
    keys.set('2', ['a', 'b', 'c']);
    keys.set('3', ['d', 'e', 'f']);
    keys.set('4', ['g', 'h', 'i']);
    keys.set('5', ['j', 'k', 'l']);
    keys.set('6', ['m', 'n', 'o']);
    keys.set('7', ['p', 'q', 'r', 's']);
    keys.set('8', ['t', 'u', 'v']);
    keys.set('9', ['w', 'x', 'y', 'z']);
    let res = [];
    const values = digits.split('').map((dig) => keys.get(dig))
    if (values.length > 0) res.push(...values[0]);
    for (let index = 1; index < values.length; index++) {
        res = res.map((resValue) => (values[index].map((value) => (`${resValue}${value}`)))).flat()
    }
    // let index = 0;
    // while (index < values.length) {
    //     if (index == 0 && values[index].length > 0) {
    //         res.push(...values[0])
    //     }
    //     if (index > 0) {
    //         res = res.map((resValue) => (values[index].map((value) => (`${resValue}${value}`)))).flat()
    //     }
    //     index++;
    // }
    return res;
}

const letterCombinations = (digits) => {
    const res = [];
    if (digits.length === 0) return res;
    const map = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
    }
    const dfs = (currStr, index) => {
        if (index > digits.length - 1) {
            res.push(currStr);
            return;
        }
        const letters = map[digits[index]];
        for (let letter of letters) {
            dfs(currStr + letter, index + 1)
        }
    }
    dfs('', 0);
    return res;
}



// const digits = "23";
const digits = "2365";
// const digits = "";
// const digits = "6";

console.log(letterCombinations(digits));