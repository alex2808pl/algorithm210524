function mergeSort(arr) {
    let lengthArr = arr.length; // длинна массивы
    if(lengthArr === 1) { // условие выхода
        return;
    }

    let mid = Math.ceil(arr.length / 2); //левый подмассив хочу больше, когда не парный размер
    let leftArr = []; // левый подмассив
    let rightArr = []; // правый подмассив

    // копируем элементы из массива в подмассивы
    for (let i = 0; i < mid; i++) {
        leftArr[i] = arr[i];
    }

    for (let j = 0; j < lengthArr - mid; j++) {
        rightArr[j] = arr[j + mid];
    }
    console.log(leftArr+" == "+rightArr);

    mergeSort(leftArr);
    mergeSort(rightArr);

    // когда мы достигли базового условия
    merge(arr, leftArr, rightArr);
}

function merge(arr, leftArr, rightArr) {
    let leftArrLength = leftArr.length;
    let rightArrLength = rightArr.length;

    // контролируем индексы подмассивов
    let leftIndex = 0;
    let rightIndex = 0;

    // контролируем индекс в основном массиве
    let arrIndex = 0;

    while (leftIndex < leftArrLength && rightIndex < rightArrLength) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) { // сравниваем элемент в левом и правом подмассиве
            arr[arrIndex] = leftArr[leftIndex]; // если условие верно, то элемент в левом меньше, сохраняем его
            // в 0 ячейку основного массива
            leftIndex++;
            arrIndex++;
        } else {
            arr[arrIndex] = rightArr[rightIndex];
            rightIndex++;
            arrIndex++;
        }
    }

    // копируем элементы если остались из левого
    while (leftIndex < leftArrLength) {
        arr[arrIndex] = leftArr[leftIndex];
        leftIndex++;
        arrIndex++;
    }

    // копируем элементы из правого
    while (rightIndex < rightArrLength) {
        arr[arrIndex] = rightArr[rightIndex];
        rightIndex++;
        arrIndex++;
    }

    console.log(leftArr+" = "+rightArr+" ===> "+arr);
}

let sortArray = [38, 27, 43, 3, 9, 82, 10];
mergeSort(sortArray);
console.log(sortArray);