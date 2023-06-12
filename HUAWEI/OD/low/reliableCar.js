function reliableCar(str) {
    const num = parseInt(str);
    let index = 0;
    sum = 0;
    while(index < num) {
        if(index.toString().indexOf('4') !== -1) {
            sum++
        }
        index++
    }
    return num - sum;
}

console.log(reliableCar(50));