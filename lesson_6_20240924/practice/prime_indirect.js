function isPrime(number) {
    if (number == 0 || number == 1)
        return true;

    return div(number, 2);
}

// Рекурсивный подход (прямая)
function div(number, divider) {
    if (number == divider)
        return true;

    if (number % divider == 0)
        return false;
    else
        return div(number, divider + 1);
}

// Рекурсивный подход (косвенная)
function div1(number, divider) {
    if (number == divider)
        return true;

    if (number % divider == 0)
        return false;
    else
        return div2(number, divider + 1); //вызов другого метода
}

function div2(number, divider) {
    if (number == divider)
        return true;

    if (number % divider == 0)
        return false;
    else
        return div1(number, divider + 1); //вызов другого метода
}

console.log(isPrime(7));

console.log(div1(7,2));
