function maxSumStandart(arr, k) {
    let length = arr.length;
    let max = 0;

    for(let i = 0; i < length - k + 1; i++) {
        let current = 0;
        for(let j = 0; j < k; j++) {
            current += arr[i+j];
            max = Math.max(current, max);
        }
    }
    return max;

}

// Скользящее окно 
function maxSumSlidingWindow(arr, k) {
    let length = arr.length;
    if(length < k) {
        console.log("wrong size of array");
    }
    let max = 0;
    for(let i = 0; i < k; i++) {
        max += arr[i];
    }

    let windowSum = max;
    for(let i = k; i < length; i++) {
        windowSum += arr[i] - arr[i-k] ;
        max = Math.max(max, windowSum);
    }

    return max;
}


let arr = [1, 55, 2, 10, 2, 13, 66, 0, 3];
let k = 3;
console.log("maxSumStandart = "+maxSumStandart(arr,k));
console.log("maxSumSlidingWindow = "+maxSumSlidingWindow(arr,k));
