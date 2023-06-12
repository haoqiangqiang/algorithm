function searchString(str1, str2) {
    const index = str1.search(str2);
    return index === -1 ? 'No' : index + 1;
}

console.log(searchString('AVERDXIVYERDIAN', 'RDXI'))