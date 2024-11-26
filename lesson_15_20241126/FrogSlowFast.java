package lesson_15_20241126;

public class FrogSlowFast {

    public static void main(String[] args) {
        Node head = new Node(1);
        Node second = new Node(2);
        Node third = new Node(3);
        Node fourth = new Node(4);

        head.next = second;
        second.next = third;
        third.next = fourth;
        fourth.next = second; // закольцуем

        System.out.println("Закольцован detectLoopFloyd ? = "+detectLoopFloyd(head));
        System.out.println("Закольцован detectLoopFloydSteps? = "+detectLoopFloydSteps(head,3));
    }


    static boolean detectLoopFloyd(Node head) {
        Node fast = head;
        Node slow = head;
    
        while(fast !=null && fast.next!=null) {
            slow = slow.next;
            fast = fast.next.next;
            if(slow == fast) {
                return true;
            }
        }
        return false;
    }

    static boolean detectLoopFloydSteps(Node head, int step) {
        Node fast = head;
        Node slow = head;
    
        while(fast !=null && fast.next!=null) {
            slow = slow.next;
            for(int i = 0; i<step; i++) { //перемещение быстрой лягушки
                fast = fast.next;
            }
            if(slow == fast) {
                return true;
            }
        }
        return false;
    }
}

class Node {
    int value;
    Node next;
    public Node(int value) {
        this.value = value;
    }
}
