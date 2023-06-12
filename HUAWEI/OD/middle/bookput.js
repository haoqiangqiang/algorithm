function bookput(books) {
    books.sort((booka, bookb) => {
        booka[0] - bookb[0]
    })
    let result = 1;
    for (let i = 0; i < books.length - 1; i++) {
        if (books[i][1] > books[i + 1][1]) {
            result++
        }
    }
    return result;
}

// bookput([[20, 16], [15, 11], [10, 10], [9, 10]]);
console.log(bookput([[20, 16], [15, 11], [10, 10], [9, 10]]))