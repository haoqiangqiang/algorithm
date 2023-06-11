const arr = [1,1,2]

const removeDuplicates = (nums) => {
    const arr = Array.from(new Set(nums));
    return arr.length;
}

const  a = removeDuplicates(arr)

console.log('a', a);