function getChange(sum, coins) {
    let result = [];
    for (let i = coins.length - 1; i >= 0; i--) {
        while (sum >= coins[i]) {
            sum -= coins[i];
            result.push(coins[i]);
        }
    }
    for (let i = 0; i < result.length; i++) {
        console.log(" " + result[i]);
    }
}

let coins = [1, 2, 5, 10]; // жадный алгоритм работает
//let coins = [1, 4, 6]; // жадный алгоритм работает не оптимально
getChange(68, coins);

