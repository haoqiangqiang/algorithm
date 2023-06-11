const mergeTwoLists1 = (list1, list2) => {
    const len1 = list1.length;
    const len2 = list2.length;
    let i = 0;
    let j = 0;
    let res = [];
    while (i < len1 && j < len2) {
        if (list1[i] <= list2[j]) {
            res.push(list1.shift())
            i++;
        } else {
            res.push(list2.shift());
            j++;
        }
    }
    if (list1.length > 0) {
        res = res.concat(list1)
    } else {
        res = res.concat(list2)
    }
    return res;
}
const mergeTwoLists = (l1, l2) => {
    if (l1 == null) {
        return l2;
    } else if (l2 == null) {
        return l1
    } else if (l1.value < l2.value) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2;
    }
}


const l1 = [1, 2, 4];
const l2 = [1, 3, 4];

console.log(mergeTwoLists(l1, l2));