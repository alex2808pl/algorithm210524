function size(array)  { //O(1)
    return array.length; // times = 1  
}

function lineFind(array, val)  { //O(n)
    let i;
    for (i = 0; i < arr.length; i++) {
        if(arr[i]===val) {
            console.log(val+" - находиться по индексу "+i); 
           return true;
        }
        
    }
    console.log(val+"не найден ("+i+")"); 
    return false;
}

function sortBubble(arr) { //O(n^2)
    let isSorted;
    do{
        isSorted = false; // отслеживает факт перемещения
        for (let i = 0; i < arr.length - 1; i++) { // n
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

    // Анализируем
    // - сравнения («больше», «меньше», «равно»);
    // - присваивания;
    // - выделение памяти.

    function sum (one, two) { 
        let result = one + two; //cost = 1+1
        return result; // +1
    }
    // O(3) ~> O(1)

    function sum1 (one, two) { 
        return  one + two; //cost = 1+1
    }
    // O(2) ~> O(1)


    function sum(array)  { //O(n)
        let sum = 0;  //cost = 1
        for (i = 0; i < array.length; i++) { //cost = 1+ 1*n +1*n
            sum = sum + array[i];  // cost = 2 n
        }
        return sum; // cost = 1
    } 
    // 1 + 1 + n + n + 2n + 1 = O(3 + 4n)  ~> O(n)

    function doubleFor(n) {
        for (i = 0; i < n/3; i++) { //const = 1 + (n/3) + (n/3) 
            for (j = 0; j <= n; j = j + 4) { // const = 1 + n + (1 + 1)*n 
                System.out.println("Hello ["+i+"] ["+j+"]"); //+1*n 
            }
        }
    }
    //  (1 + 2n/3) * (1 + 3n) = n*n = 0(n^2)


    function nlog(n) {
        for(i = 0; i < n; i++) //const = 3, (1 + (1*n) + (1*n)) times = n
            for(j = 1; j < n; j = j * 2) // const = 4 (1 + 1*n*2 + 1*n*2 ),   log 2 (6) = 3 log 3 (6 ) ~ 2    times = log n
                System.out.println("Hello ["+i+"] ["+j+"]"); //константное время //+1*n
    }
    // (1+2n) * (1+3*logn) = 1 +3logn+ 2n + 6n*logn =  3*logn + 2n + 6n*log(n)  = O(n log(n))


let arr = [1,2,3,4,5,6];

console.log("Size array O(1)- "+size(arr));
console.log("Лин.поиск O(n) = "+lineFind(arr, 6));

let arr1 = [1,6,3,2,5,4];
console.log("Пузырек О(n^2)= "+sortBubble(arr1));

console.log("Сумма = "+sum(arr));
