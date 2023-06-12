function prefectPosition(strs) {
    console.log('strs', 'WWWW');
    const count = {
        W: 0,
        A: 0,
        S: 0,
        D: 0,
    };

    for(let c  of strs) {
        count[c]++
    }
    console.log('count', count);
    const avg = strs.length / 4;

    console.log('avg', avg);

    let total = 0;

    let flag = true;

    for(let c in count) {
        console.log('c', c);
        if(count[c] > avg) {
            flag = false;
            count[c] -= avg;
            total += count[c]
        } else {
            delete count[c]
        }
    }

    console.log('total', total, count);

    if(flag) return 0;

    let i = 0, j = 0;
    let minLen = strs.length + 1;

    console.log('minLen', minLen);

    while(j < strs.length) {
        console.log('j, strs.length', j, strs.length);
        const jc = strs[j];

        console.log('jc', jc, count[jc]);

        if(count[jc]-- > 0) {
            total--;
        }
        console.log('total', total);
        while(total === 0) {
            console.log('min', minLen, j - i + 1);
            minLen = Math.min(minLen, j - i + 1);

            const ic = strs[i];

            console.log('ic', ic);
            if(count[ic]++ >= 0) {
                total++;
            }
            console.log('i, total', total, i);
            i++
        }
        console.log('j', j);
        j++
    }
    console.log('result', minLen);
    return minLen;

}

prefectPosition('WWWW')
// console.log(prefectPosition('WWWW'))