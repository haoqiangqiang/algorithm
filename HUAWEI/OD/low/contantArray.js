function isHasNum(array) {
    return array.reduce((a, b) => {
        return a.length + b.length
    })
}
function contantArray(step, num, array) {
    let lists = []
    for(let i = 0;i < num; i++) {
        lists[i] = array[i]
    }
    let res = '';
    while(isHasNum(lists) > 0) {
        for(let i = 0;i < num; i++) {
            const arr = lists[i].splice(0, 3);
            if(arr.length > 0) {
                res = `${res}${arr.join(',')},`;
            }
        }
    }
    return res.slice(0, res.length - 1);
}

console.log(contantArray(3, 2, [[2,5,6,7,9,5,7],[1,7,4,3,4]]));