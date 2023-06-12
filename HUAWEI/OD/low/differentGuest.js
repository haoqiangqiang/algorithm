function transform(value, key) {
    let result = [];
    while (value >= key) {
        num = value % key;
        value = Math.floor(value / key);
        result.unshift(num);
    }
    result.unshift(value);
    return result;
}
function differentGuest(value, luck, key) {
    let result = 0;
    const transNumers = transform(value, key);
    transNumers.forEach((num) => {
        if (num == luck) {
            result++
        }
    })
    return result;
}

console.log(differentGuest(3243, 11, 16));
