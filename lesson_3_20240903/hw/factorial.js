//1. Реализовать метод вычисления факториала (n!) рекурсивным и итеративным способами.
function factorialIteration(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}

function factorialRecursive(n) {
    if (n == 1) {
        return 1;
    }
    let res = n * factorialRecursive(n - 1);
    return res;
}

let n = 5;
console.log("Факториал итеративно js " + n + " = " + factorialIteration(n));
console.log("Факториал рекурсивно js " + n + " = " + factorialRecursive(n));