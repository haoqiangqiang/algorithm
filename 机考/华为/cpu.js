function solveMothod(arr, n) {
    let cpus = [[], []];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 4) {
            cpus[0].push(arr[i])
        } else {
            cpus[1].push(arr[i])
        }
    }
    let result = [];
    switch (n) {
        case 1:
            if (cpus[0].length == 2 || cpus[1].length == 2) {
                const index = cpus.findIndex(cpu => cpu.length == 2);
                result = [[cpus[index][0]], [cpus[index][1]]];
            } else if (cpus[0].length == 4 || cpus[1].length == 4) {
                const index = cpus.findIndex(cpu => cpu.length == 4);
                result = [[cpus[index][0]], [cpus[index][1]], [cpus[index][2]], [cpus[index][3]]];
            } else if (cpus[0].length == 3 || cpus[1].length == 3) {
                const index = cpus.findIndex(cpu => cpu.length == 3);
                result = [[cpus[index][0]], [cpus[index][1]], [cpus[index][2]]];
            } else if (cpus[0].length == 1 || cpus[1].length == 1) {
                result = [[cpus[index][0]]];
            }
            break;
        case 2:
            if (cpus[0].length == 4 || cpus[1].length == 4) {
                const index = cpus.findIndex(cpu => cpu.length == 4);
                result = [[cpus[index][0], [cpus[index][1]]], [cpus[index][0], [cpus[index][2]]], [cpus[index][0], [cpus[index][3]]], [cpus[index][0], [cpus[index][4]]], [cpus[index][1], [cpus[index][2]]], [cpus[index][1], [cpus[index][3]]], [cpus[index][2], [cpus[index][3]]]];
            } else if (cpus[0].length == 2 || cpus[1].length == 2) {
                const index = cpus.findIndex(cpu => cpu.length == 2);
                result = [cpus[index][0], cpus[index][1]];
            } else if (cpus[0].length == 1 || cpus[1].length == 1) {
                const index = cpus.findIndex(cpu => cpu.length == 1);
                const otherIndex = index == 0 ? 1 : 0;
                result = [[[cpus[index][1]], cpus[otherIndex][0]], [[cpus[index][1]], cpus[otherIndex][1]], [[cpus[index][1]], cpus[otherIndex][2]], [[cpus[index][1]], cpus[otherIndex][3]]];
            } else if (cpus[0].length == 1 && cpus[1].length == 3 || cpus[0].length == 3 && cpus[1].length == 1) {
                const index = cpus.findIndex(cpu => cpu.length == 1);
                const otherIndex = cpus.findIndex(cpu => cpu.length == 3);
                result = [[cpus[index][0], cpus[otherIndex][0]], [cpus[index][0], cpus[otherIndex][1]], [cpus[index][0], cpus[otherIndex][2]]]
            }
            break;
        case 4:
            if (cpus[0].length == 4 || cpus[1].length == 4) {
                const index = cpus.findIndex(cpu => cpu.length == 4);
                result = [cpus[index][0], cpus[index][1], cpus[index][2], cpus[index][3]];
            }
            break;
        case 8:
            if (cpus[0].length == 4 && cpus[1].length == 4) {
                result = [cpus[0][0], cpus[0][1], cpus[0][2], cpus[0][3], cpus[1][0], cpus[1][1], cpus[1][2], cpus[1][3]];
            }
            break;
    }
    return result;
}

console.log(solveMothod([0, 1, 4, 5, 6, 7], 4))