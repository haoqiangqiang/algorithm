function unidirectionLinkNodeMiddle(start, num, arr) {
    console.time('node')
    const Nodes = new Map();
    for (let i = 0; i < num; i++) {
        Nodes.set(arr[i][0].toString(), { value: arr[i][1], next: arr[i][2] })
    }
    const nodes = [];
    let current = start;
    while (Nodes.get(current)) {
        nodes.push(Nodes.get(current).value);
        current = Nodes.get(current).next;
    }
    const result =  nodes.length % 2 === 0 ? nodes[nodes.length / 2] : nodes[Math.floor(nodes.length / 2)]
    console.timeEnd('node')
    return result;
}

// unidirectionLinkNodeMiddle('00010', 4, [['00000', 3, '-1'], ['00010', 5, '12309'], ['11451', 6, '00000'], ['12309', 7, '11451']])
// console.log(unidirectionLinkNodeMiddle('00010', 4, [['00000', 3, '-1'], ['00010', 5, '12309'], ['11451', 6, '00000'], ['12309', 7, '11451']]));
console.log(unidirectionLinkNodeMiddle('10000', 3, [['76892', 7, '12309'], ['12309', 5, '-1'], ['10000', 1, '76892']]));