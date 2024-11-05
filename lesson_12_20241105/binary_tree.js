class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinaryTree {
    constructor() {
        this.root = null;
    }   
    
    getRoot() {
        return this.root;
    }
   

    print(data) {
        console.log(data);
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) { //пустое дерево
            this.root = newNode;
        } else {
            let current = this.root;
            let parent;
            
            while (true) {
                parent = current;
                if (value === current.value) { // такой объект уже есть
                    return;
                } else if(value < current.value) {
                    current = current.left;
                    if(current === null) {
                        parent.left = newNode;
                        return;
                    }
                } else { //value > current.value
                    current = current.right;
                    if(current === null) {
                        parent.right = newNode;
                        return;
                    }
                }
            }

        }
    }

     // вставка через рекурсию
    insertRecursively(value, node = this.root)
    {
        if (!node) {
            return new Node(value);
        }

        if (value < node.value)
         {
            node.left = this
            .insertRecursively(value, node.left);
        } else if (value > node.value) 
        {
            node.right = this
            .insertRecursively(value, node.right);
        }

        return node;
    }

    find(value) {
        let current = this.root;

        while (current.value !== value) {
            if (current.value > value) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
        return current;
    }
}

// Create a binary tree
const bt = new BinaryTree();

// 3,1,2,4
// bt.insert(3);
// bt.insert(1);
// bt.insert(2);
// bt.insert(4);
// bt.print(bt.root);

bt.root = bt.insertRecursively(3);
bt.insertRecursively(1);
bt.insertRecursively(2);
bt.insertRecursively(4);

bt.print(bt.root);

console.log(bt.find(2));
console.log(bt.find(5));