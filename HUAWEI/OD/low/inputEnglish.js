function inputEnglish(strs, str) {
    const strArr = strs.split(' ');
    const strings = strArr.map((str) => (str.split('\''))).flat();
    for(let i = 0; i < strings.length; i++) {
        if(strings[i].startsWith(str)) {
            return strings[i]
        }
    } 
    return str
}

console.log(inputEnglish("i don't know", 'He'))