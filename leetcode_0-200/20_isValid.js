const isValid = (s) => {
    const res = [];
    for (let key of s) {
        switch (key) {
            case '(':
            case '{':
            case '[':
                res.unshift(key);
                break;
            case ')':
                if (res[0] === '(') {
                    res.shift()
                    break;
                } else {
                    return false;
                }
            case '}':
                if (res[0] === '{') {
                    res.shift()
                    break;
                } else {
                    return false;
                }
            case ']':
                if (res[0] === '[') {
                    res.shift()
                    break;
                } else {
                    return false;
                }
        }
    }
    return  res.length > 0 ? false : true;
}

// const s = ''
// const s = '()'
// const s = '(){}[]'
// const s = '(]'
// const s = '{[]}()'
const s = '{[]})()'

console.log(isValid(s));