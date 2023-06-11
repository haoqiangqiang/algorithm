const longestPalindrome = (s) => {
    const isPalindrome = (str) => {
        const len = str.length
        for (let i = 0; i < len / 2; i++) {
            if (str[i] !== str[len - 1 - i]) {
                return false;
            }
        }
        return true;
    }
    if (s.length < 2) {
        return s;
    }
    let maxLength = 0;
    let resultString = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            // console.log('compare', s, s[i], s[j], s.slice(i, j + 1), (j - i + 1), maxLength);
            // console.log('tiaojian', s[i] === s[j], isPalindrome(s.slice(i, j + 1)), (j - i + 1) > maxLength);
            if (s[i] === s[j] && isPalindrome(s.slice(i, j + 1)) && (j - i + 1) > maxLength) {
                maxLength = j - i + 1;
                resultString = s.slice(i, j + 1);
            }
        }
    }
    if (maxLength == 0) {
        return s[0]
    }
    // console.log(maxLength);
    return resultString;
}


// const s = 'babad'
const s = 'cbbd'

console.log(longestPalindrome(s))