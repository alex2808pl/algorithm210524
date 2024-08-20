/** Алгоритм линейного поиска */

function linearSearch() {
    let arr = [1, 2, 3, 4, 5, 6];
    console.log(`Number exists(js)? = ${getNumber(arr, 5)}`);
}

function getNumber(arr, number) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === number) {
            return true;
        }
    }
    return false;
}

//console.log("Test");

linearSearch();