function binarySearchIterat(sortedArray, valueToFind, low, high) {
    let index = -1;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (sortedArray[mid] < valueToFind) {
            low = mid + 1;
        } else if (sortedArray[mid] > valueToFind) {
            high = mid - 1;
        } else if (sortedArray[mid] == valueToFind) {
            index = mid;
            break;
        }
    }
    return index;
}

function binarySearchRecurs(sortedArray, valueToFind, low, high) {
    if (low == high) {
        return (sortedArray[low] === valueToFind) ? low : -1;
    }

    let mid = low + Math.floor((high - low) / 2);

    if (valueToFind > sortedArray[mid]) {
        let res = binarySearchRecurs(sortedArray, valueToFind, mid + 1, high);
        return res;
    } else if (sortedArray[mid] > valueToFind) {
        let res = binarySearchRecurs(sortedArray, valueToFind, low, mid - 1);
        return res;
    }
    return mid;
}

// let arr = [11, 22, 44, 50, 60, 86, 114, 140, 145, 190];
let arr = [1, 3, 4, 8, 22, 98];
let key = 2;

console.log(arr);

console.log("Index (Iteration) = "+binarySearchIterat(arr, key, 0, arr.length - 1));
console.log("Index (Recurs) = "+ binarySearchRecurs(arr, key, 0, arr.length - 1));

