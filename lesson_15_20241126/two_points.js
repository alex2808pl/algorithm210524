// Два указателя O(n)
function findPairSumTwoPoint(arr, sum) {
    let i = 0;
    let j = arr.length - 1;

    while(i < j) {
        let currentSum = arr[i] + arr[j];
        if( currentSum == sum) {
            console.log("Yes TwoPoint : "+arr[i]+" + "+arr[j]+" = "+sum );
            return;
        } else if(currentSum < sum) {
            i++;
        } else {
            j--;
        }
    }
    console.log("Not found TwoPoint!")
}

// Стандарный перебор O(n2)
function findPairSumStandart(arr, sum) {
        let length = arr.length;

        for (let i = 0; i < length - 2; i++) {
            let currentSum = 0;
            for (let j = i+1; j < length-1; j++) {
                currentSum = arr[i] + arr[j];
                if(currentSum == sum) {
                    console.log("Yes Standart : "+arr[i]+" + "+arr[j]+" = "+sum );
                    return;
                }
            }
        }
        console.log("Not found Standart!");
    }


let arr = [1,2,3,4,6];
let sum = 6;
findPairSumTwoPoint(arr, sum);
findPairSumStandart(arr, sum);