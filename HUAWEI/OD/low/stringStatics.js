function stringStatics(str) {
    const full = str.split('@')[0].split(',').map((item) => (item.split(':')))
    const occupy = str.split('@')[1].split(',').map((item) => (item.split(':')))
    const fullMap = new Map();
    const occupyMap = new Map();
    full.forEach(element => {
        fullMap.set(element[0], Number(element[1]))
    })
    occupy.forEach(element => {
        occupyMap.set(element[0], Number(element[1]))
    })
    for(key of occupyMap.keys()) {
        if(fullMap.has(key)) {
            fullMap.set(key, fullMap.get(key) - occupyMap.get(key))
        }
    }
    let result = ''
    for(let value of fullMap.entries()) {
        result += `${value[0]}: ${value[1]}\n`
    }
    return result;
}


console.log(stringStatics('a:3,b:5,c:2@'))