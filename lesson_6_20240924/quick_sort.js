/** Быстрая сортировка */

function quickSort(array, start, end) {
    if (start < end) {
        let indexPivot = partition(array, start, end);
        // smaller to the left
        quickSort(array, start, indexPivot - 1);
        // bigger to the right
        quickSort(array, indexPivot + 1, end);
    }
}

function partition(array, start, end) {
    
    let pivot = array[end]; // choose pivot element
    let indexPivot = start; // Index of smaller element and indicates the right position

    for (let i = start; i < end; i++) {
        if (array[i] <= pivot) {
            swap(array, i, indexPivot);
            indexPivot++;
        }
    }
    swap(array, end, indexPivot); // swap pivot to right position

    return indexPivot;
}

function swap(array, first, second) {
    let temp = array[first];
    array[first] = array[second];
    array[second] = temp;
}

let testArray = [7, -2, 4, 1, 6, 5, 0, -4, 2];
quickSort(testArray, 0, testArray.length - 1);
console.log(testArray);
