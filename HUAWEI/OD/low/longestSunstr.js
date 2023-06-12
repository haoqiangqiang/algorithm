// const str = 'alolob'
const str = 'loocdolox'
// const str = 'bcbcbc'

function longestSubStr(str) {
    const strs = str.split('')
    let len = strs.length
    let num = 0

    for(let char of strs) {
        if(char == 'o') {
            num++
        }
    }
    if(num % 2 == 0) {
        return len
    } else {
        return len - 1
    }
}

console.log(longestSubStr(str))