const removeNthFromEnd = (head, n) => {
    const dmy = new ListNode(0, head);
    let slow = dmy;
    let fast = dmy;
    while (n-- > 0) fast = fast.next;
    while (fast !== null && fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next
    return fast.next;
}

// const head = [1, 2, 3, 4, 5]
// const n = 2;

// const head = [1]
// const n = 1;

const head = [1, 2]
const n = 1;

console.log(removeNthFromEnd(head, n));