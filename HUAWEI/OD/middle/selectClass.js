function selectClass(str1, str2) {
    let class1 = str1.split(';').map((score) => ({id: score.split(',')[0], score: score.split(',')[1]}));
    let class2 = str2.split(';').map((score) => ({id: score.split(',')[0], score: score.split(',')[1]}));
    let students = []
    class1.forEach(student1 => {
        if(class2.find((student2) => student2.id === student1.id)) {
            students.push(student1)
        }        
    });
    let selectStudents = new Map();
    students.forEach((student) => {
        let classId = student.id.slice(0, 5);
        if(selectStudents.has(classId)) {
            selectStudents.set(classId, `${selectStudents.get(classId)};${student.id}`)
        } else {
            selectStudents.set(classId, student.id)
        }
    })
    let result = ''
    for(let key of selectStudents) {
        result = `${result}${key[0]}\n${key[1]}\n`;
    }
    return result
    // console.log('class1', class1);
    // console.log('class2', class2);
    // console.log('students', students);
    // console.log('selectStudents', selectStudents);
}

selectClass('01202021,75;01201033,95;01202008,80;01203006,90;01203088,100', '01202008,70;01203088,85;01202111,80;01202021,75;01201100,88')
console.log(selectClass('01202021,75;01201033,95;01202008,80;01203006,90;01203088,100', '01202008,70;01203088,85;01202111,80;01202021,75;01201100,88'))