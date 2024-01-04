// const merge = (nums1, m, nums2, n) => {
//     let result = [];
//     let i = 0, j = 0, l = 0;
//     for (let k = 0; k < m + n; k++) {
//         console.log('for', i, j, nums1[i], nums2[j]);
//         if (i >= m) {
//             result[l] = nums2[j];
//             j++;
//         } else if (j >= n) {
//             result[l] = nums1[i];
//             i++;
//         } else if (nums1[i] <= nums2[j]) {
//             result[l] = nums1[i];
//             i++;
//         } else {
//             result[l] = nums2[j];
//             j++;
//         }
//         l++;
//     }
//     return result;
// }

const merge = (nums1, m, nums2, n) => {
    let result = [];
    let i = 0, j = 0, l = 0;
    for (let k = 0; k < m + n; k++) {
        if (i >= m) {
            result[l] = nums2[j];
            j++;
        } else if (j >= n) {
            result[l] = nums1[i];
            i++;
        } else if (nums1[i] <= nums2[j]) {
            result[l] = nums1[i];
            i++;
        } else {
            result[l] = nums2[j];
            j++;
        }
        l++;
    }
    nums1 = result;
    return nums1;
}


const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;
const result = merge(nums1, m, nums2, n);
console.log('result', result); // [1, 2, 2, 3, 5, 6]

// const nums1 = [1];
// const m = 1;
// const nums2 = [];
// const n = 0;
// const result = merge(nums1, m, nums2, n);
// console.log('result', result); // [1]

// const nums1 = [];
// const m = 0;
// const nums2 = [1];
// const n = 1;
// const result = merge(nums1, m, nums2, n);
// console.log('result', result); // [1]