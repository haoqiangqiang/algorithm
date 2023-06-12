const arr = [{ name: 'zhangsna', age: 32 }, { name: 'lisi', age: 42 }, { name: 'wangwu', age: 32 }]

console.log(Array.prototype)

const people = arr.filter((item) => item.age === 32)
    .map((item) => ({ ...item, is32: true }))

console.log('ae', arr, people)