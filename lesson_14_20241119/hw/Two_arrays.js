function arrayEqual(arr1, arr2) {
    let lengthArr1 = arr1.length;
    let lengthArr2 = arr2.length;

    // If lengths of arrays are not equal
    if (lengthArr1 != lengthArr2) {
        return false;
    }
    // Store arr1[] elements and their counts in hash map
    let map = new Map();
    var count = 0;
    for (let idx = 0; idx < lengthArr1; idx++) {
        if (map.get(arr1[idx]) == null)
           map.set(arr1[idx], 1);
         else {
            count = map.get(arr1[idx]);
            count++;
            map.set(arr1[idx], count);
        }
    }
   
    // Traverse arr2[] elements and check if all
    // elements of arr2[] are present same number
    // of times or not.
    for (let idx = 0; idx < lengthArr2; idx++) {

        // If there is an element in arr2[], but
        // not in arr1[]
        if (!map.has(arr2[idx]))
            return false;

        // If an element of arr2[] appears more
        // times than it appears in arr1[]
        if (map.get(arr2[idx]) == 0)
            return false;

        count = map.get(arr2[idx]);
        --count;
        map.set(arr2[idx], count);
    }
    return true;
}

let arr1 = [1, 2, 5, 4, 0, 2];
let arr2 = [2, 4, 5, 0, 1, 2];
console.log("Эти два массива идентичны: " + arrayEqual(arr1, arr2));
