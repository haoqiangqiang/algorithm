function pipei(basicStr, keyStr) {
    for (let i = 0; i < basicStr.length; i++) {
        for (let j = 0; j <= keyStr.length; j++) {
            if(j === keyStr.length) {
                return i;
            }
            if(basicStr[i + j] === keyStr[j]) {
                continue
            } else {
                break;
            }
        }
    }
    return -1;
}

const basic = 'sdfsdfdfddgvdvgd';
const key = 'vgd';

console.log(pipei(basic, key));