const lengthOfLastWord = (s) => {
    let sum = 0
    let index = s.length - 1;
    while (s[index] === ' ' && index > 0) {
        index--
    }
    while (s[index] !== ' ' && index > 0) {
        sum++;
        index--
    }
}