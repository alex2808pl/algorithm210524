function getInversion(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                console.log(arr[i]+","+arr[j]);
                count++;
            }
        }
    }
    return count;
}

let arr = [8, 4, 2, 1] /*[3, 1, 2]*/;
let countInversion = getInversion(arr); 
console.log("Count inversion = "+countInversion);