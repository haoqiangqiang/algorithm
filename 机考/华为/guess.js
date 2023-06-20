const str1 = 'conection connection,today';
const str2 = 'bdni,wooood bind,wrong,wood';

function solveMothod(string) {
    strs1 = string.split(',').map((str => str.split(' '))).flat();
    strs2 = strs1.map((str) => Array.from(new Set(str.split(''))));
    let index = -1;
    for (let i = 0; i < strs2.length; i++) {
        for (let j = i + 1; j < strs2.length; j++) {
            for (let k = 0; k < str2[i].length; k++) {
                if(strs2[i][k] !== strs2[j][k]) continue;
                index = i;
            }
        }
    }
    console.log(index);
}

solveMothod(str1)