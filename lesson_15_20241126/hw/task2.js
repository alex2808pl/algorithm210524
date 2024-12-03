function findPairSumTwoPoint(array1, array2) {
    const lengthN = array1.length;
    const lengthM = array2.length;

    let firstElement = array1[0];
    let secondElement = array2[0];
    let minModul = Math.abs(array1[0] - array2[0]);

    let i = 0; // first pointer 
    let j = 0; // second pointer 

    while (i < lengthN && j < lengthM) {
        
        let tempModul = Math.abs(array1[i] - array2[j]);
        if (minModul > tempModul) {
            minModul = tempModul;
            firstElement = array1[i];
            secondElement = array2[j];
        }

        if(array1[i] < array2[j]) {
           i++;
        }
        else  {
           j++;
        }

    }
    console.log(firstElement);
    console.log(secondElement);
}

let array1 = [1, 2, 10];
let array2 = [8, 20, 30];

findPairSumTwoPoint(array1, array2);