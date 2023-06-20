/**
 * @describe 请用js实现一个停车场的功能, 这个停车场有存车 和 取车的能力, 然后有一个停车场小哥, 负责管理两个停车场, 他可以选择使用不同的方式停车, 比如:  选一个空位最多的停车 或者 选一个空位最少的停车
 * 有单元测试覆盖最佳
 * @author: 郝强强
 */

/** 
 * ParkingLot 停车场类
*/
class ParkingLot {
    constructor(size) {
        // 停车场最大容量
        this.maxSize = size;
        // 停车场已使用容量
        this.size = 0;
    }
    // 停车方法，停车时，size 加 1，返回 true，若停车场已满，返回 false
    enter() {
        if (this.full()) {
            return false;
        }
        this.size++;
        return true;
    }
    // 取车方法，取车时，size 减 1，返回 true，若停车场已空，返回 false，
    exit() {
        if (this.empty()) {
            return false;
        }
        this.size--;
        return true;
    }
    // 判断停车场是否为空
    empty() {
        return this.size === 0;
    }
    // 判断停车场是否已满
    full() {
        return this.size === this.maxSize;
    }
    // 获取停车场的空位
    getEmpty() {
        return this.maxSize - this.size;
    }
    // 获取停车场的已使用车位
    getSize() {
        return this.size;
    }
}

/** 
 * ParkAttendant 停车场管理员类
*/
class ParkAttendant {
    constructor(parkingLotA, parkingLotB) {
        // 管理员所管理的 A, B 两个停车场
        this.parkingLotA = parkingLotA;
        this.parkingLotB = parkingLotB;
    }
    // 按照空位最多的方法停车，
    enterMore() {
        if (this.parkingLotA.getEmpty() >= this.parkingLotB.getEmpty()) {
            return this.parkingLotA.enter();
        } else {
            return this.parkingLotB.enter();
        }
    }
    // 按照空位最少的方法停车，若停车场已满，则向另一个停车场停放
    enterLess() {
        if (this.parkingLotA.getEmpty() <= this.parkingLotB.getEmpty()) {
            if (!this.parkingLotA.enter()) {
                return this.parkingLotB.enter();
            } else {
                return true;
            }
        } else {
            if (!this.parkingLotB.enter()) {
                return this.parkingLotA.enter();
            } else {
                return true;
            }
        }
    }
}






/**
 * 按照空位最多的停车方式停车的测试用例，设置 A 停车场最大值为 10，B 停车场最大值为 8，
 * @param {*} input 停车数量
 * @param {*} result 预期结果
 * @returns 测试结果与预期结果是否相同
 */
function testEnterMore(input, result) {
    const pA = new ParkingLot(10);
    const pB = new ParkingLot(8);
    const a = new ParkAttendant(pA, pB);
    // 当停车数量小于0时, A, B 停车场均不停车，所以数量均为 0，且执行结果为 false
    if (input < 0) {
        return result.A === pA.getSize() && result.B === pB.getSize() && result.exception === false;
    }
    for (let i = 0; i < input; i++) {
        a.enterMore();
    }
    // 执行完毕之后，查看 A，B 停车场的数量是否符合预期结果，并且判断停车数量是否超出两个停车场的最大承载量
    return result.A === pA.getSize() && result.B === pB.getSize() && result.exception === (input <= 18);
}

/**
 * 按照空位最少的停车方式停车的测试用例，设置 A 停车场最大值为 10，B 停车场最大值为 8，
 * @param {*} input 停车数量
 * @param {*} result 预期结果
 * @returns 测试结果与预期结果是否相同
 */
function testEnterLess(input, result) {
    const pA = new ParkingLot(10)
    const pB = new ParkingLot(8)
    const a = new ParkAttendant(pA, pB);
    // 当停车数量小于0时, A, B 停车场均不停车，所以数量均为 0，且执行结果为 false
    if (input < 0) {
        return result.A === pA.getSize() && result.B === pB.getSize() && result.exception === false;
    }
    for (let i = 0; i < input; i++) {
        a.enterLess();
    }
    // 执行完毕之后，查看 A，B 停车场的数量是否符合预期结果，并且判断停车数量是否超出两个停车场的最大承载量
    return result.A === pA.getSize() && result.B === pB.getSize() && result.exception === (input <= 18);
}

// 测试用例集，
// input 分别包含 0 辆，正常值 9 辆，最大承载值 18 辆，超出最大承载值 19 辆，以及特殊值 -1 辆
// result 分别为输入值的预期结果
const usecases = {
    caseMore: [
        { input: 0, result: { A: 0, B: 0, exception: true } },
        { input: 9, result: { A: 6, B: 3, exception: true } },
        { input: 18, result: { A: 10, B: 8, exception: true } },
        { input: 19, result: { A: 10, B: 8, exception: false } },
        { input: -1, result: { A: 0, B: 0, exception: false } },

    ],
    caseLess: [
        { input: 0, result: { A: 0, B: 0, exception: true } },
        { input: 9, result: { A: 1, B: 8, exception: true } },
        { input: 18, result: { A: 10, B: 8, exception: true } },
        { input: 19, result: { A: 10, B: 8, exception: false } },
        { input: -1, result: { A: 0, B: 0, exception: false } },
    ]

};

// 执行测试用例
const testcaseMore = usecases.caseMore.every(({ input, result }) => testEnterMore(input, result))

const testcaseLess = usecases.caseLess.every(({ input, result }) => testEnterLess(input, result))

// 查看测试结果
console.log('testcase More:', testcaseMore);
console.log('testcase less:', testcaseLess);
