const inoderTraversal = (root) => {
    const res = [];
    dfs = (root) => {
        if (!root.value) {
            return;
        }
        dfs(root.left)
        res.push(root.value)
        dfs(root.right)
    }
    dfs(root);
    return res;
}