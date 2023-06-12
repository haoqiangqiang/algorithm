function stringReSort(str) {
    let strs = str.split(' ')
    strs = strs.map((str) => [...str].sort().join(''))
    const count = {}
    strs.forEach(str => {
        if (count[str]) {
            count[str]++
        } else {
            count[str] = 1;
        }
    });
    strs.sort((a, b) =>
        count[a] !== count[b]
            ? count[b] - count[a]
            : a.length !== b.length
                ? a.length - b.length
                : a > b
                    ? 1
                    : -1
    )
    return(strs)
}

// stringReSort('This is an apple')
// console.log(stringReSort('My sister is in the house not in the yard'))
console.log(stringReSort('This is an apple'))