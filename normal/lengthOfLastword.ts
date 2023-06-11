function lengthOfLastWord(str: string) {
    let count = 0;
    let flag = false;
    for(let i = str.length - 1; i >= 0; i--) {
        if (str[i] && str[i] !== ' ') {
            flag = true;
            count++;
        } else if (flag) {
            return count;
        }
    }
}


// const testStr = "hell0 world";
// const testStr = "    fly me    to   the   moon   ";
// const testStr = "lurry is a jobboy";
const testStr = "a";


console.log(lengthOfLastWord(testStr));

