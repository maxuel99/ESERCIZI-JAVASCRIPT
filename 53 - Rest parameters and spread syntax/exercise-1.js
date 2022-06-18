function sum(...theArgs) {
    let total = 0;
    for (let arg of theArgs) {
        total += arg;
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5));