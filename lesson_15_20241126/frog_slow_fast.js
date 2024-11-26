class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function detectLoopFloyd(head) {
    let fast = head;
    let slow = head;

    while(fast !==null && fast.next!==null) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) {
            return true;
        }
    }
    return false;
}

function detectLoopFloydSteps(head, step) {
    let fast = head;
    let slow = head;

    while(fast !==null && fast.next!==null) {
        slow = slow.next;
        for(let i = 0; i<step; i++) { //перемещение быстрой лягушки
            fast = fast.next;
        }
        if(slow === fast) {
            return true;
        }
    }
    return false;
}

let head = new Node(1);
let second = new Node(2);
let third = new Node(3);
let fourth = new Node(4);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = second; // закольцуем

console.log("Закольцован? = "+detectLoopFloyd(head));
console.log("Закольцован? = "+detectLoopFloydSteps(head,3));


