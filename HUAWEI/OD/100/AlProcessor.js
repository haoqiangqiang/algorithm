function AlProcessor(arr, num) {
    const link1 = [];
    const link2 = [];

    for (let i of arr) {
        if (i < 4) {
            link1.push(i)
        } else {
            link2.push(i)
        }
    }

    const ans = [];
    const len1 = link1.length;
    const len2 = link2.length;

    switch (num) {
        case 1:
            if (len1 == 1 || len2 == 1) {
                if (len1 == 1) dfs(link1, 0, 1, [], ans);
                if (len2 == 1) dfs(link2, 0, 1, [], ans);
            } else if (len1 == 3 || len2 == 3) {
                if (len1 == 3) dfs(link1, 0, 1, [], ans);
                if (len2 == 3) dfs(link2, 0, 1, [], ans);
            } else if (len1 == 2 || len2 == 2) {
                if (len1 == 2) dfs(link1, 0, 1, [], ans);
                if (len2 == 2) dfs(link2, 0, 1, [], ans);
            } else if (len1 == 4 || len2 == 4) {
                if (len1 == 4) dfs(link1, 0, 1, [], ans);
                if (len2 == 4) dfs(link2, 0, 1, [], ans);
            }
            break;
        case 2:
            if (len1 == 2 || len2 == 2) {
                if (len1 == 2) dfs(link1, 0, 2, [], ans);
                if (len2 == 2) dfs(link2, 0, 2, [], ans);
            } else if (len1 == 4 || len2 == 4) {
                if (len1 == 4) dfs(link1, 0, 2, [], ans);
                if (len2 == 4) dfs(link2, 0, 2, [], ans);
            } else if (len1 == 3 || len2 == 3) {
                if (len1 == 3) dfs(link1, 0, 2, [], ans);
                if (len2 == 3) dfs(link2, 0, 2, [], ans);
            }
            break;
        case 4:
            if (len1 == 4 || len2 == 4) {
                if (len1 == 4) ans.push(link1);
                if (len2 == 4) ans.push(link2);
            }
            break;
        case 8:
            if (len1 == 4 && len2 == 4) {
                ans.push([...link1, ...link2]);
            }
            break;
    }

    return ans;
}

function dfs(arr, index, level, path, res) {
    if (path.length === level) {
        return res.push([...path]);
    }
    for (let i = index; i < arr.length; i++) {
        path.push(arr[i]);
        dfs(arr, index + 1, level, path, res);
        path.pop();
    }
}

// AlProcessor([0, 1, 5, 6, 7, 8], 2)
// console.log(AlProcessor([0, 1, 5, 6, 7, 8], 2))
console.log(AlProcessor([0, 1, 5, 6, 7, 8], 1))
// console.log(AlProcessor([0, 1, 2, 3, 4, 5, 6, 7], 8))