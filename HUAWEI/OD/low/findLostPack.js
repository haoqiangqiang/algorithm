function findLostPack(string) {
    const strs = string.split(',').map(Number)
    let num = 0;
    while(true) {
        console.log('strs', strs.includes(num));
        if(!strs.includes(num)) {
            break;
        }
        num++
    }
    return num
}

console.log(findLostPack('2,4,1,3,0'))