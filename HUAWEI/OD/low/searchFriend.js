function searchFriend(n, arr) {
    let result = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (arr[j] > arr[i]) {
                result[i] = j;
                break;
            }
        }
    }
    return result;
}

console.log(searchFriend(2, [95, 100]))