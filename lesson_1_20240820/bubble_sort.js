function sortBubble(arr) {
    let isSorted;
    do{
        isSorted = false; // отслеживает факт перемещения
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                isSorted = true;
            }
        }
    } while (isSorted);
    return arr;
}

let arr = [22, 5, 1, 3, 2, 50];
console.log(arr);
console.log("После сортировки");
console.log(sortBubble(arr));