function funRecursion(x, y) {
    if (x === 0) {
        return y;
    } else {
        let res = funRecursion(x - 1, x + y);
        console.log(`Res = ${res}; x = ${x}; y = ${y}`);
        return res;
    }
}

function funIteration(x, y) {
    let res = 0;
    while(x !=0 ) {
        res = x + y;
        console.log("res = " + res + "; x = " + x + "; y = " + y);
        x =  x - 1;
        y = res;
    }
    return y;
}

console.log(funRecursion(5, 1));
console.log(funIteration(5, 1));
