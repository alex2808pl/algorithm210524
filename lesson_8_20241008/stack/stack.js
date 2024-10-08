class Stack { // для хранения положительных значений 
    constructor() {
        this.MAX = 10; // размер стэка
        this.top = -1; //индекс последнего добавленного элемента
        this.a = new Array(this.MAX);
    }

    
    isEmpty() {
        return (this.top < 0);
    }

    // добавление данных
    push(x) {
        if (this.top >= (this.MAX - 1)) {
            console.log("Stack Overflow");
            return false;
        } else {
            this.a[++this.top] = x; // вставка
            console.log(x + " pushed into stack");
            return true;
        }
    }    

    // извлечение данных 
    pop() {
        if (this.top < 0) {
            console.log("Stack Underflow");
            return 0;
        } else {
            return this.a[this.top--]; //извлечение
        }
    }

    // просмотр значение для извлечения
    peek() {
        if (this.top < 0) {
            console.log("Stack Underflow");
            return 0;
        } else {
            return this.a[this.top];
        }
    }

    print() {
        for (let index = this.top; index > -1; index--) {
            console.log(" "+this.a[index]);
        }
    }

}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();

console.log(stack.peek()+" - (peek) view data from top stack");
stack.print();

console.log("isEmpty = "+stack.isEmpty());

console.log(stack.pop()+" - poped from stack");
console.log(stack.pop()+" - poped from stack");
console.log(stack.pop()+" - poped from stack");
console.log(stack.pop()+" - poped from stack");
stack.print();

console.log("isEmpty = "+stack.isEmpty());
