class ParkingLot {
    stall = new Map();
    constructor(pakingSize, name) {
        this.pakingSize = pakingSize;
        this.name = name;
    }
    enter(licensePlate) {
        if (this.empty > 0) {
            this.stall.set(licensePlate, licensePlate);
            console.log(`拍照为${licensePlate}的车辆停入${this.name}停车场`);
            return true;
        } else {
            console.error('停车场已满');
            return false;
        }
    }
    exit(licensePlate) {
        if (this.stall.has(licensePlate)) {
            const car = this.stall.get(licensePlate);
            this.stall.delete(licensePlate);
            console.log(`拍照为${car}的车辆驶出${this.name}停车场`);
            return car;
        } else {
            console.error('本停车场无该车辆');
            return false;
        }
    }
    getEmpty() {
        console.log(`${this.name}停车场容量为${this.pakingSize}, 还剩余${this.pakingSize - this.stall.size}个空位`);
        return this.pakingSize - this.stall.size;
    }
    getCars() {
        return this.stall.values();
    }
}

class ParkAttendant {
    constructor(parkingAName, pakingSizeA, parkingBName, pakingSizeB) {
        this.parkingA = new ParkingLot(pakingSizeA, parkingAName);
        this.parkingB = new ParkingLot(pakingSizeB, parkingBName);
    }

    selectMoreEmptyPark(licensePlate) {
        return this.parkingA.getEmpty() >= this.parkingB.getEmpty() ? this.parkingA.enter(licensePlate) : this.parkingB.enter(licensePlate);
    }

    selectLessEmptyPark(licensePlate) {
        return this.parkingA.getEmpty() <= this.parkingB.getEmpty() ? this.parkingA.enter(licensePlate) : this.parkingB.enter(licensePlate);
    }
}




const parkAttant = new ParkAttendant('A', 10, 'B', 8);

const cars = ['435334', '32424', '23435435', '453435435', '345345', '787887', '4353534']
const caseA = ['']

parkAttant.se 

parkAttant.selectLessEmptyPark('435334')
parkAttant.selectMoreEmptyPark('32424')
parkAttant.selectLessEmptyPark('23435435')
parkAttant.selectMoreEmptyPark('453435435')
parkAttant.selectMoreEmptyPark('345345')
parkAttant.selectLessEmptyPark('787887')
parkAttant.selectLessEmptyPark('4353534')





