function iterativeQsort(numbers) {
    let stack = [];
    stack.push(0);
    stack.push(numbers.length);
    while (stack.length>0) {
        let end = stack.pop();
        let start = stack.pop();
        if (end - start < 2) {
            continue;
        }
        let p = start + Math.ceil((end - start) / 2);
        p = partition(numbers, p, start, end);
        stack.push(p + 1);
        stack.push(end);
        stack.push(start);
        stack.push(p);
    }
    return numbers;
}
function partition(input, position, start, end) {
    let l = start;
    let h = end - 2;
    let piv = input[position];
    swap(input, position, end - 1);
    while (l < h) {
        if (input[l] < piv) {
            l++;
        } else if (input[h] >= piv) {
            h--;
        } else {
            swap(input, l, h);
        }
    }
    let idx = h;
    if (input[h] < piv) {
        idx++;
    }
    swap(input, end - 1, idx);
    return idx;
}
function swap(arr, source, destination) {
    let temp = arr[source];
    arr[source] = arr[destination];
    arr[destination] = temp;
}

let unsorted = [7, -2, 4, 1, 6, 5, 0, -4, 2];
console.log("Несортированный массив : " + unsorted);
let sorted = iterativeQsort(unsorted);
console.log("Сортированный массив : " + sorted);
