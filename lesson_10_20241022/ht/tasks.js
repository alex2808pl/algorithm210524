class Task {
    constructor(name, time, cost) {
        this.name = name;
        this.time = time;
        this.cost = cost;
    }
}

class JobSelection {
    taskSelectionTime(list, maxTime) {
        list.sort((a,b) => a.time - b.time); //сортируем по времени реализации задачи
        let res = []; // выбранные задания
        let totalTime = 0; //общее затраченное время
        this.print(list); //список всех заданий
        console.log("-----------");

        for (let index = 0; index < list.length; index++) {
            totalTime += list[index].time; 
            if (totalTime <= maxTime) {
                res.push(list[index]);
            } else {
                break;
            }
        }
        return res;
    }

    taskSelectionCost(list, maxTime) {
        list.sort((a,b) => b.cost - a.cost); //сортируем по стоимости задачи в порядке убывания
        let res = []; // выбранные задания
        let totalTime = 0; //общее затраченное время
        this.print(list); //список всех заданий
        console.log("-----------");

        for (let index = 0; index < list.length; index++) {
            totalTime += list[index].time; 
            if (totalTime <= maxTime) {
                res.push(list[index]);
            } else {
                break;
            }
        }
        return res;
    }

    taskSelectionRealCost(list, maxTime) {
        list.sort((a,b) => b.cost/b.time - a.cost/a.time); //сортируем по удельная цена за единицу времени
        let res = []; // выбранные задания
        let totalTime = 0; //общее затраченное время
        this.print(list); //список всех заданий
        console.log("-----------");

        for (let index = 0; index < list.length; index++) {
            totalTime += list[index].time; 
            if (totalTime <= maxTime) {
                res.push(list[index]);
            } else {
                break;
            }
        }
        return res;
    }



    print(list) {
        for (let e of list) {
            console.log(e.name + " : "+e.time+"->"+e.cost);
        }
    }

}

let list = [new Task("a",3,10), new Task("b",2,8), new Task("c",1,5), new Task("d",3,11), 
            new Task("e",4,15), new Task("g",5,17)];

let maxTime = 11;

let jobSelection = new JobSelection();

console.log("----- Time ------");
let res = jobSelection.taskSelectionTime(list, maxTime);
jobSelection.print(res);

console.log("----- Cost ------");
res = jobSelection.taskSelectionCost(list, maxTime);
jobSelection.print(res);

console.log("----- RealCost ------");
res = jobSelection.taskSelectionRealCost(list, maxTime);
jobSelection.print(res);


