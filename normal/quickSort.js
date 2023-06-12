const quickSort = (arr) => {
    const sort = (arr, start, end) => {
        if (start < end) {
            let i = start;
            let j = end;
            let key = arr[start];
            while (i < j) {
                while (arr[j] > key && i < j) {
                    j--
                }
                arr[i] = arr[j];
                while (arr[i] < key && i < j) {
                    i++
                }
                arr[j] = arr[i]
            }
            arr[i] = key;
            sort(arr, start, i - 1);
            sort(arr, j + 1, end);
        } else {
            return;
        }
    }
    sort(arr, 0, arr.length - 1);
    return arr;
}

const arr = [2, 3, 1, 4, 8, 7, 9, 6];
console.log(quickSort(arr));
