class Activity {
    constructor(name, start, finish) {
        this.name = name;
        this.start = start;
        this.finish = finish;
    }
}

class ActivitySelection {
    selectActivity(list) {
        list.sort((a,b) => a.finish - b.finish); //сортируем по дате окончания
        let res = []; // выбранные события
        this.print(list); //список всех событий
        console.log("-----------");

        let first = list[0];
        let last = first.finish;
        res.push(first);

        for (let index = 1; index < list.length; index++) {
            if(list[index].start >= last) { //дата старта >= дата окончание предыдущего
                res.push(list[index]);
                last = list[index].finish;
            }
        }
        
        this.print(res); //список выбранных событий
    }

    print(list) {
        for (let e of list) {
            console.log(e.name + "  "+e.start+"->"+e.finish);
        }
    }

}

let list = [new Activity("a", 16,17), new Activity("b", 15,16), new Activity("c", 10,15), new Activity("d", 12,13), 
            new Activity("e", 14,17), new Activity("f", 10,11), new Activity("g", 14,15), new Activity("i", 11,13)];

let activitySelection = new ActivitySelection();
activitySelection.selectActivity(list);
