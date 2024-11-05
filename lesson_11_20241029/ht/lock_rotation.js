function minCountRotation(input, unlockCode) {
    let rotation = 0;
    let inputDigit;
    let unlockCodeDigit;

    while (input > 0 || unlockCode > 0) {
        inputDigit = input % 10;
        unlockCodeDigit = unlockCode % 10;

        let forwardRotation = Math.abs(inputDigit - unlockCodeDigit);
        let backRotation = 10 - Math.abs(inputDigit - unlockCodeDigit);
        let minRotation = Math.min(forwardRotation, backRotation);

        rotation = rotation + minRotation;

        input = Math.trunc(input / 10);
        unlockCode = Math.trunc(unlockCode / 10);
    }

    return rotation;
}

let input = 2345;
let unlockCode = 5432;

let resultRotation = minCountRotation(input, unlockCode);
console.log("Min rotation for input: " + input + " is " + resultRotation);