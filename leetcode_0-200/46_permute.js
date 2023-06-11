const permute = (nums) => {
    let res = [];
    let path = [];
    const dfs = (used) => {
        if (path.length == nums.length) {
            res.push([...path])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) {
                continue
            }
            path.push(nums[i])
            used[i] = true;
            dfs(used);
            path.pop()
            used[i] = 0
        }
    }
    dfs([])
    return res;
}

// const nums = [1, 2, 3];
// const nums = [1, 2];
const nums = [1];


console.log(permute(nums))