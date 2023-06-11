const findMedianSortedArrays = (num1, num2) => {
    const totalLength = num1.length + num2.length;
    middleLength = totalLength / 2;
    for (let i = 1; i < middleLength; i++) {
        if (num1.length > 0 && num2.length > 0) {
            if (num1[0] <= num2[0]) {
                num1.shift()
            } else {
                num2.shift()
            }
        } else if (num1.length == 0) {
            num2.shift()
        } else if (num2.length == 0) {
            num1.shift()
        }
    }
    console.log(num1, num2);
    if (totalLength % 2 !== 0) {
        if (num1.length > 0 && num2.length > 0) {
            return Math.min(num1[0], num2[0])
        } else if (num1.length == 0) {
            return num2[0]
        } else if (num2.length == 0) {
            return num1[0]
        }
    } else {
        let value = 0;
        for (let j = 0; j < 2; j++) {
            if (num1.length > 0 && num2.length > 0) {
                if (num1[0] <= num2[0]) {
                    value += num1.shift()
                } else {
                    value += num2.shift()
                }
            } else if (num1.length == 0) {
                value += num2.shift()
            } else if (num2.length == 0) {
                value += num1.shift()
            }
        }
        console.log(value);
        return value / 2;
    }
}

// const num1 = [1, 3];
// const num2 = [2];

// const num1 = [1, 2]
// const num2 = [3, 4]

// const num1 = [0, 0]
// const num2 = [0, 0]

const num1 = []
const num2 = [1]

console.log(findMedianSortedArrays(num1, num2))