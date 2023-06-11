const currentLight = 'green';
const greenTime = 5000;
const yellowTime = 1000;
const redTime = 3000;
let timer;

// const change = (current) => {
//     if (timer) {
//         clearTimeout(timer);
//     }
//     if (current === 'green') {
//         console.log('green');
//         timer = setTimeout(() => {
//             change('yellow');
//         }, greenTime);
//     } else if (current === 'yellow') {
//         console.log('yellow');
//         timer = setTimeout(() => {
//             change('red');
//         }, yellowTime)
//     } else if (current === 'red') {
//         console.log('red');
//         timer = setTimeout(() => {
//             change('green');
//         }, redTime)
//     }
// }

const change = (current) => {
    if (current === 'green') {
        new Promise((resolve, reject) => {
            console.log(current);
            setTimeout(() => {
                change('yellow');
            }, greenTime);
        })
    } else if (current === 'yellow') {
        new Promise((resolve, reject) => {
            console.log(current);
            setTimeout(() => {
                change('red');
            }, yellowTime);
        })
    } else if (current === 'red') {
        new Promise((resolve, reject) => {
            console.log(current);
            setTimeout(() => {
                change('green');
            }, redTime);
        });
    }
}

change('green');