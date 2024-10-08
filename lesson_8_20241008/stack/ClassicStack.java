package lesson_8_20241008.stack;

public class ClassicStack {
    private final int[] a;
    private int top;
    private final int MAX;

    public ClassicStack() {
        this.MAX = 10; // размер стэка
        this.top = -1; //индекс последнего добавленного элемента
        this.a = new int[this.MAX];
    }
    
    // проверка на пустой stack
    public boolean isEmpty() {
        return (this.top < 0);
    }

    // добавление данных
    public boolean push(int x) {
        if (this.top >= (this.MAX - 1)) {
            System.out.println("Stack Overflow");
            return false;
        } else {
            this.a[++this.top] = x; // вставка
            System.out.println(x + " pushed into stack");
            return true;
        }
    }    

    // извлечение данных 
    public int pop() {
        if (this.top < 0) {
            System.out.println("Stack Underflow");
            return 0;
        } else {
            return this.a[this.top--]; //извлечение
        }
    }

    // просмотр значение для извлечения
    public int peek() {
        if (this.top < 0) {
            System.out.println("Stack Underflow");
            return 0;
        } else {
            return this.a[this.top];
        }
    }

    // печать stack
    public void print() {
        for (int index = this.top; index > -1; index--) {
            System.out.print(" "+this.a[index]);
        }
        System.out.println();
    }

}
