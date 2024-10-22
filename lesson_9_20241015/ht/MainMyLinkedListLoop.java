package lesson_9_20241015.ht;

import lesson_9_20241015.Node;

public class MainMyLinkedListLoop {
    public static void main(String[] args) {
        MyLinkedListLoop lists = new MyLinkedListLoop();

        lists.pushToHead(5);
        lists.pushToHead(10);
        lists.pushToHead(3);
        lists.pushToHead(8);
        lists.pushToHead(7);
        lists.pushToHead(9);
      
    
       lists.print(); 

        //  // Зацикливаем список (соединяем хвост с нодой со значением 3)
        //  Node end = lists.getHead();
        //  Node cycle = null;
        //  while(end.getNext() != null) {
        //       if(end.getData()==3) cycle = end;
        //       end = end.getNext();
        //  }
        //  end.setNext(cycle);
      
         System.out.println("Set = "+lists.detectLoopSet());
         System.out.println("Floyd = "+lists.detectLoopFloyd());
    }
}
