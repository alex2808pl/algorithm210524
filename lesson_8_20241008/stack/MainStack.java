package lesson_8_20241008.stack;

public class MainStack {
    public static void main(String[] args) {
        ClassicStack stack = new ClassicStack();
        stack.push(10);
        stack.push(20);
        stack.push(30);
        stack.print();

        System.out.println(stack.peek()+" - (peek) view data from top stack");
        stack.print();

        System.out.println("isEmpty = "+stack.isEmpty());
        System.out.println(stack.pop()+" - poped from stack");
        stack.print();

        System.out.println(stack.pop()+" - poped from stack");
        System.out.println(stack.pop()+" - poped from stack");
        System.out.println(stack.pop()+" - poped from stack");
        stack.print();
        System.out.println("isEmpty = "+stack.isEmpty());
    }

}
