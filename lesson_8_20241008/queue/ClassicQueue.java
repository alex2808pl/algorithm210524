package lesson_8_20241008.queue;

public class ClassicQueue {
    private int capacity; // вместимость очереди
    private int[] arr;
    private int count; // кол-во реальных элементов в очереди
    private int head; // индекс головы
    private int tail; // индекс хвоста

    public ClassicQueue(int size){
        this.capacity = size; // вместимость очереди
        this.arr = new int [size];
        this.count = 0; // кол-во реальных элементов в очереди
        this.head = 0;
        this.tail = -1; //индекс последнего элемента
    }

    // реальный размер очереди
    public int getSize() {
        return this.count;
    }

    // проверка на пустую очередь
    public boolean isEmpty() {
        return this.count == 0;
    }

    // добавление в очередь
    public void push(int x) {
        if(this.count == this.capacity) {
            System.out.println(" Queue overflow!");
        } else {
            this.arr[++this.tail] = x;
            this.count++;
            System.out.println(x + " pushed to the queue");
        }
    }

    public void print() {
        for (int index = this.head; index < this.count; index++) {
            System.out.print(" "+this.arr[index]);
        }
        System.out.println();
    }

    // извлекаем из очереди
    public int pop(){
        if(this.isEmpty()) {
            System.out.println("No element in queue!");
            return -1;
        } else {
            int returnElement = this.arr[this.head];
            // сделать сдвижку влево
            for (int index = 1; index <= this.count; index++) {
                this.arr[index-1] = this.arr[index];
            }
            this.count--;
            this.tail--;
            return returnElement;
        }
    }

    // просмотр элемента без извлечения
    public int peek() {
        if(this.isEmpty()) {
            System.out.println("No element in queue!");
            return -1;
        } else {
            return this.arr[this.head];
        }
    }

}
