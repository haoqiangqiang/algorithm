const generateParenthesis = (n) => {
    const res = [];
    const dfs = (lRemain, rRemain, str) => {
        if (str.length == 2 * n) {
            res.push(str);
            return
        }
        if (lRemain > 0) {
            dfs(lRemain - 1, rRemain, str + '(')
        }
        if (lRemain < rRemain) {
            dfs(lRemain, rRemain - 1, str + ')')
        }
    }
    dfs(n, n, '');
    return res;
}

const n = 3;

console.log(generateParenthesis(n))