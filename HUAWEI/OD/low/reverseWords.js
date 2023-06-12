function reverseWords(str, start, end) {
    const strs = str.split(' ');
    for(let i = 0; i < (end - start + 1) / 2; i++) {
        let temp = strs[i + start];
        strs[i + start] = strs[end - i];
        strs[end - i] = temp;
    }
    return strs.join(' ');
}

console.log(reverseWords('I am a developer', 1, 2))