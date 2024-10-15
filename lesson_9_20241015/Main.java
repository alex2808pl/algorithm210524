package lesson_9_20241015;

public class Main {
    public static void main(String[] args) {
        MyLinkedList lists = new MyLinkedList();
        System.out.println(" - pushToHead - "); 
        lists.pushToHead(5);
        lists.pushToHead(3);
        lists.pushToHead(6);
        lists.print();

        System.out.println(" - removeFirst - ");
        lists.removeFirst();
        lists.print();

        System.out.println(" - pushToTail - ");
        lists.pushToTail(7);
        lists.print();

        System.out.println(" - removeLast - ");
        lists.removeLast();
        lists.print();

        System.out.println(" - pushToIndex - ");
        lists.pushToIndex(1, 10);
        lists.print();

        System.out.println(" - remove - ");
        lists.remove(1);
        lists.print();
        
        System.out.println("get(1) = "+lists.get(1));  
        System.out.println("Size="+lists.size());
    }

}
