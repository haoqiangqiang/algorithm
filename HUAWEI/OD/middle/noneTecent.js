function noneTenet() {

}

function dfs(arr, level, limit, max, path) {
    if (level == arr.length) {
        const nextString = path.map(num => String.fromCharCode(num)).join('');
        return nextString;
    }
    const min = limit ? arr[level] : 97;

    for (let i = min; i <= max; i++) {
        if (limit && level === arr.length - 1 && i === min) continue
        if (level >= 1 && i === path[level - 1]) continue
        if (level >= 2 && i === path[level - 2]) continue
        path.push(i)
        let ans = dfs(arr, level + 1, limit && i === min, max, path);
        if (ans) return ans
        path.pop()
    }
}


dfs([98, 98, 97], 0, true, 99, []);