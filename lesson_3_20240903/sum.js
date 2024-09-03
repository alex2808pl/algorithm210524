function sumIteration(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum; 

}

function sumIterationReverse(n) {
    let sum = 0;
    for (let i = n; i > 0 ; i--) {
        sum += i;
    }
    return sum; 
}


function sumRecursive(n) {
    if(n===1) {
        return 1;
    }
    let res = sumRecursive(n-1);
    let sum = n + res;
    console.log(`sum = ${sum}; n = ${n}`); 
    return sum;
}

// Пример косвенной рекурсии sumRecursive1 -> sumRecursive2 -> sumRecursive1
function sumRecursive1(n) {
    if(n===1) {
        return 1;
    }
    let res = sumRecursive2(n-1);
    let sum = n + res;
    console.log(`sum = ${sum}; n = ${n}`); 
    return sum;
}


function sumRecursive2(n) {
    if(n===1) {
        return 1;
    }
    let res = sumRecursive1(n-1);
    let sum = n + res;
    console.log(`sum = ${sum}; n = ${n}`); 
    return sum;
}


console.log("Sum = "+sumIteration(5))
console.log("SumReverse = "+sumIterationReverse(5))
console.log("SumRecursive = "+sumRecursive(5))
console.log("SumRecursive1 = "+sumRecursive1(5))

    
    // sumRecursive(5) res = 15
    //   sumRecursive(4) res = 10
    //     sumRecursive(3) res = 6
    //         sumRecursive(2) res = 3  
    //            sumRecursive(1) res = 1
    //                  return 1
    //            2 + 1 = 3, return 3 (sumRecursive(2))
    //         3 + 3 = 6, return 6 (sumRecursive(3))
    //      4 + 6 = 10, return 10 (sumRecursive(4))
    //   5 + 10 = 15, return 15 (sumRecursive(5))
    //  sum = 15  