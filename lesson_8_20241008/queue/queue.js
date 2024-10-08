class Queue {
    constructor(size){
        this.capacity = size; // вместимость очереди
        this.arr = new Array(size);
        this.count = 0; // кол-во реальных элементов в очереди
        this.head = 0;
        this.tail = -1; //индекс последнего элемента
    }

    // реальный размер очереди
    size() {
        return this.count;
    }

    // проверка на пустую очередь
    empty() {
        return this.count === 0;
    }

    // добавление в очередь
    push(x) {
        if(this.count === this.capacity) {
            console.log(" Queue overflow!");
        } else {
            this.arr[++this.tail] = x;
            this.count++;
            console.log(x + " pushed to the queue")
        }
    }

    print() {
        for (let index = this.head; index < this.count; index++) {
            console.log(this.arr[index]);
        }
    }

    // извлекаем из очереди
    pop(){
        if(this.empty()) {
            console.log("No element in queue!");
            return -1;
        } else {
            let returnElement = this.arr[this.head];
            // сделать сдвижку влево
            for (let index = 1; index <= this.count; index++) {
                this.arr[index-1] = this.arr[index];
            }
            this.count--;
            this.tail--;
            return returnElement;
        }
    }

    // просмотр элемента без извлечения
    peek() {
        if(this.empty()) {
            console.log("No element in queue!");
            return -1;
        } else {
            return this.arr[this.head];;
        }
    }

 }

let queue = new Queue(8);
console.log("isEmpty = "+queue.empty());  // Output: true

queue.push(10);
queue.push(20);
queue.push(30);
queue.print(); 
console.log("Size = "+queue.size()); 
console.log("isEmpty = "+queue.empty());  

console.log(queue.pop() + " - poped element from the queue")
queue.print(); 

console.log(queue.peek() + " - peeked element in the queue")
queue.print(); 

console.log(queue.pop() + " - poped element from the queue")
queue.print(); 