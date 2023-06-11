function reverseWord(str) {
    const strs = str.split('')
    const len = strs.length;
    for (let i = 0; i < len / 2; i++) {
        if ((strs[i].charCodeAt(0) > 96 && strs[i].charCodeAt(0) < 123) && (strs[len - i - 1].charCodeAt(0) > 96 && strs[len - i - 1].charCodeAt(0) < 123)) {
            const temp = strs[i];
            strs[i] = strs[len - i - 1];
            strs[len - i - 1] = temp;
        }
    }
    return strs;
}

function isFuYin(str, r = true) {
    if(r) {
        return str !== 'a' && str !== 'e' && str !== 'i' && str !== 'o' && str !== 'u';
    } else {
        return str !== 'a' && str !== 'e' && str !== 'i' && str !== 'o' && str !== 'u' && str !== 'r' ;
    }
}

function isYuanYin(str) {
    return str == 'a' || str == 'e' || str == 'i' || str == 'o' || str == 'u';
}

function countSpecialWord(str) {
    const strs = str.split(' ');
    const words = strs.map(str => reverseWord(str));
    let count = 0;
    words.forEach(word => {
        if(word.length === 4 && isFuYin(word[0]) && isYuanYin(word[1]) && isFuYin(word[2], false) && word[3] == 'e') {
            count++
        }
    });
    return count;
}

console.log(countSpecialWord('eram a ekec'));