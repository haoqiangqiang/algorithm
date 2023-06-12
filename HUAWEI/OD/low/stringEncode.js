function getOffset() {
    let offset = [1, 2, 4];
    for (let i = 3; i < 50; i++) {
        offset[i] = offset[i - 1] + offset[i - 2] + offset[i - 3];
    }
    return offset;
}

function encode(strArr, offset) {
    let encodeStr = [];
    for (let i = 0; i < strArr.length; i++) {
        let key = strArr.charCodeAt(i) + offset[i]
        if (key > 122) {
            key = ((key - 123) % 26) + 97
        }
        encodeStr[i] = String.fromCharCode(key)
    }
    return encodeStr;
}
function stringEncode(n, arr) {
    let offset = getOffset();
    let result = ''
    arr.map((list) => encode(list, offset)).forEach((list) => {
        result += `${list.join('')}\n`
    })
    return result;
}

console.log(stringEncode(2, ['xy', 'fdscdfgvdgdvgfd']))