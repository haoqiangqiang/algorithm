function maxNumber(nums) {
    nums.sort((x, y) => {
        let sx = 10;
        let sy = 10;
        while (sx <= x) {
            sx = sx * 10;
        }
        while (sy <= y) {
            sy = sy * 10;
        }
        return ('' + (sx * y + x)) - ('' + (sy * x + y));
    })
    console.log('nums', nums);
    if (nums[0] === [0]) {
        return '0';
    }
    return nums.join('');
}

maxNumber([4, 45])