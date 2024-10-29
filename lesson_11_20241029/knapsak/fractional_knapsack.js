class Item {
    constructor(weight, value, cost, fraction) {
        this.weight = weight;
        this.value = value; // общая стоимость
        this.cost = value / weight; // стоимость за единицу
        this.fraction = 0; //вес отрезанного куска
    }
}

class FractionalKnapsack {
    fillFractionalKnapsack(items, totalWeight)  {
        items.sort((a,b) => a.time - b.time); //сортируем по удельной стоимости 
        let res = []; // выбранные слитки
        let totalValue = 0;

        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            let curWeight = item.weight;
            let curValue = item.value;
            
            if(totalWeight - curWeight >=0) { // ложим в рюкзак целый кусок
                totalWeight -= curWeight;
                totalValue += curValue; 
                item.fraction = curWeight;
                res.push(item);
            } 
            else { //логика отрезания куска
                let fraction = totalWeight; //оставшееся количество, которое нам нужно в рюкзак положить - отрезаем
                totalWeight -= fraction; // ложим кусок отрезанный в рюкзак
                totalValue += (item.cost * fraction); // добавили в общую стоимость отрезанного куска
                item.fraction = fraction; 
                res.push(item);
                if(totalWeight == 0) {
                    break;
                }
            }
        }
        this.print(res);

        return totalValue;

    }

    
    print(list) {
        for (let e of list) {
            console.log(e.weight + " : "+e.value+" -> "+e.cost+" :: "+e.fraction);
        }
    }
  
}

let weight = [10, 20, 30];
let value = [60, 100, 120];     
let totalWeight = 50;

let items = [];

for (let i = 0; i < weight.length; i++) {
    items.push(new Item(weight[i], value[i], 0, 0));
}

let fractionalKnapsack = new FractionalKnapsack();

let knapsackValue = fractionalKnapsack.fillFractionalKnapsack(items, totalWeight);
console.log("Заработаем = "+knapsackValue);

