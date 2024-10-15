/** Связанный список */
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    getData() {
        return this.data;
    }

    setData(data) {
        this.data = data;
    }

    getNext() {
        return this.next;
    }

    setNext(next) {
        this.next = next;
    }
}

class MyLinkedList {
    constructor() {
        this.head = null;
      }

     // --- First element ---

    pushToHead(data) {
        let newNode = new Node(data);
        //Make next of new Node as head
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        newNode.setNext(this.head);
        //Move the head to point to new Node
        this.head = newNode;
    }

    removeFirst() {
        if (this.head === null) {
            return false;
        }
        this.head = this.head.next;
        return true;
    }

    // --- Last element ------

    pushToTail(data) {
        let newNode = new Node(data);
        // Is empty, then make the new node as head
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        // Else traverse till the last node
        let last = this.head;
        while (last.next !== null) {
            last = last.next;
        }
        // Change the next of last node
        last.next = newNode;
    }

    removeLast() {
        if (this.head === null) {
            console.log("List is Empty");
            return false;
        }

        let current = this.head;
        let previous = null;

        if (current.next === null) { // one element
            this.head = null;
        } else {
            while (current.next !== null) {
                previous = current;
                current = current.next;
            }

            if (previous !== null) {
                previous.next = null; // remove last node
            }
        }
        return true;
    }

    // --- Index ----

    pushToIndex(index, data) {
        let newNode = new Node(data);
        let current = this.head;
        let jump;

        if (index < 1) {
            console.log("index out of bounds");
            return false;
        } else {
            jump = 0;
            while (jump < index - 1) {
                current = current.next;
                jump++;
            }

            newNode.next = current.next;
            current.next = newNode;

            return true;
        }
    }

    remove(index) {
        let current = this.head;
        let jump;
        if (index < 1) {
            console.log("index out of bounds");
            return false;
        } else {
            jump = 0;
            while (jump < index - 1) {
                current = current.next;
                jump++;
            }
            current.next = current.next.next;
            return true;
        }
    }

    get(index) {
        let count = -1;
        if (this.head === null) {
            return -1;
        }
        if (index < 0 || index > this.size()) {
            return -1;
        }
        let node = this.head;
        while (node !== null) {
            count++;
            if (count === index) {
                return node.getData();
            }
            node = node.getNext();
        }

        return -1;
    }

    size() {
        let node;
        let size = 0;
        for (node = this.head; node !== null; node = node.getNext()) {
            size++;
        }
        return size;
    }

    print() {
        let node = this.head;
        while (node !== null) {
            console.log(node.getData() + " ");
            node = node.getNext();
        }
    }

 }

 let lists = new MyLinkedList();
 console.log(" - pushToHead - "); 
 lists.pushToHead(5);
 lists.pushToHead(3);
 lists.pushToHead(6);
 lists.print();

 console.log(" - removeFirst - "); 
 lists.removeFirst();
 lists.print();

console.log(" - pushToTail - "); 
lists.pushToTail(7);
lists.print();

console.log(" - removeLast - "); 
lists.removeLast();
lists.print();

console.log(" - pushToIndex - "); 
lists.pushToIndex(1, 10);
lists.print();

console.log(" - remove index- "); 
lists.remove(1);
lists.print();
 
console.log("get(1) = "+lists.get(1));     
console.log("Size JS = "+lists.size());   
