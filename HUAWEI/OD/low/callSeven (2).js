const input = "2 2 3"

function callSeven(str) {
    const arr = str.split(' ').map((item) => parseInt(item, 10));
    console.log('arr', arr)

    let result = new Array(arr.length).fill(0)
    const count = arr.reduce((a, b) => {
        return a + b
    })

    let index = 1;
    let num = 0;

    while (num < count) {
        if (index.toString().search('7') !== -1 || index % 7 === 0) {
            let i = (index % arr.length) - 1
            if (i === -1) {
                result[arr.length - 1]++
            } else {
                result[i]++
            }
            num++
        }
        index++
    }
    return result.join(' ');
}

console.log(callSeven(input)) 