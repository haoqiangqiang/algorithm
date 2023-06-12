function surplusMobile(n, array, m) {
    let mobile = new Map()
    for (let i = 0; i < n; i++) {
        if (mobile.has(array[i])) {
            mobile.set(array[i], mobile.get(array[i]) + 1)
        } else {
            mobile.set(array[i], 1);
        }
    }
    for (let key of mobile.keys()) {
        while (mobile.get(key) > 1) {
            if (m == 0) {
                break
            } else {
                mobile.set(key, mobile.get(key) - 1);
                m--;
            }
        }
    }
    return m !== 0 ? mobile.size - m : mobile.size
}

console.log(surplusMobile(4, [5, 1, 2, 2], 2));