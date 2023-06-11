const lengthOfLongestSubstring = function (s) {
    let left = 0;
    let res = 0;
    const keys = new Map();
    for (let i = 0; i < s.length; i++) {
        if (keys.has(s[i]) && keys.get(s[i]) >= left) {
            left = keys.get(s[i]) + 1;
        }
        res = Math.max(res, i - left + 1);
        keys.set(s[i], i)
    }
    return res;
}

const lengthOfLongestSubstring1 = (s) => {
    if(s.length <= 1) return s.length;
    let left = 0;
    let right = 1;
    let maxLength = 0;
    let temp;
    while(right < s.length) {
        temp = s.slice(left, right);
        if(temp.includes(s[right])) {
            left++;
            continue;
        } else {
            right++
        }
        if(right - left > maxLength) maxLength = right - left;
    }
    return maxLength
}



// console.log(lengthOfLongestSubstring1('abcabcbb'))
// console.log(lengthOfLongestSubstring1('bbbbb'))
// console.log(lengthOfLongestSubstring1('pwwkew'))
console.log(lengthOfLongestSubstring1('pwk'))