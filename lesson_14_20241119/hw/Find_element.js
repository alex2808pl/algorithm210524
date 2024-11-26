function firstElementNative(arr, n, k) {
    // This loop is used for selection
    // of elements
    for (let i = 0; i < n; i++) {
        // Count how many times selected element
        // occurs
        let count = 0;
        for (let j = i; j < n; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }

        // Check, if it occurs k times or not
        if (count === k) {
            return arr[i];
        }
    }

    return -1;
}

// Эффективный подход через Map
// use this function:
function firstElementMap(arr, n, k) {
    let map = new Map();
    for (let i = 0; i < n; i++) {
        var a = 0;
        if(map.has(arr[i])) {
            a = map.get(arr[i]) || 0;
        }
        map.set(arr[i], a + 1);
    }
    for (let i = 0; i < n; i++) {
        if (map.get(arr[i]) === k) {
            return arr[i];
        }
    }
    return -1;
}


let arr = [1, 7, 4, 3, 4, 8, 7];
    let n = arr.length;
    let k = 2;
    console.log(firstElementNative(arr, n, k));
    console.log(firstElementMap(arr, n, k));