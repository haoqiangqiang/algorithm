const str = 'aSdsSdaSdsSscds'

function statisticsAndSort(str) {
    const arr = str.split('')
    let result = [];
    arr.forEach(strItem => {
        const index = result.findIndex(item => item.value === strItem);
        if (index !== -1) {
            result[index].number++
        } else {
            result.push({ value: strItem, number: 1 })
        }
    });
    result.sort((a, b) => {
        return b.number - a.number
    })
    result.sort((a, b) => {
        if (a.number == b.number && (a.value.charCodeAt() > 97 && b.value.charCodeAt() < 90)) {
            return -1
        }
    }) 
    let resultStr = ''
    result.forEach((resultItem) => {
        resultStr += `${resultItem.value}:${resultItem.number};`
    })
    return resultStr;
}

console.log(statisticsAndSort(str))