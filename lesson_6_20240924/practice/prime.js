function isPrime(number) {
    if (number == 0 || number == 1)
        return true;

    return div(number, 2);
}

// Рекурсивный подход
function div(number, divider) {
    if (number == divider)
        return true;

    if (number % divider == 0)
        return false;
    else
        return div(number, divider + 1);
}

// Итеративный подход
function divIter(number) {
    for(let divider=2; divider<number; divider++) {
        if (number % divider == 0)
            return false;
    }
    return true;

}

console.log(isPrime(7));

console.log(divIter(7));