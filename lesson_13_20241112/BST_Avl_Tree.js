class Node {
    constructor(key, height, left, right) {
        this.key = key;
        this.height = height;
        this.left = left;
        this.right = right;
    }
}

class AvlTree {
    constructor(root) {
        this.root = root;
    }

    insert(node, key) {
        // if the root is null, create a new node and return it
        if (node === undefined || node === null) {
            return new Node(key,0);
        }

        // if the given key is less than the root node, recur for the left subtree
        if (key < node.key) {
            node.left = this.insert(node.left, key);
        } else { // otherwise, recur for the right subtree
            node.right = this.insert(node.right, key);
        }

        return this.balanceTree(key, node);
    }

    balanceTree(key, newNode) {
        /* 2. Update height of this parent node */
        newNode.height = 1 + Math.max(Util.getHeightNode(newNode.left), Util.getHeightNode(newNode.right));

        /* 3. Get the balance factor */
        let balance = Util.getBalanceFactor(newNode);

        // If this node becomes unbalanced, then there
        // are 4 cases LeftLeft Case
        if (balance > 1 && key < newNode.left.key) {
            return Util.leftRotate(newNode);
        }

        // RightRight Case
        if (balance < -1 && key > newNode.right.key) {
            return Util.leftRotate(newNode);
        }

        // LeftRight Case
        if (balance > 1 && key > newNode.left.key) {
            newNode.left = Util.leftRotate(newNode.left);
            return Util.rightRotate(newNode);
        }

        // RightLeft Case
        if (balance < -1 && key < newNode.right.key) {
            newNode.right = Util.rightRotate(newNode.right);
            return Util.leftRotate(newNode);
        }

        /* return the (unchanged) node pointer */
        return newNode;
    }

    print2(node) {                       // метод для вывода дерева в консоль
        let globalStack = [];            // общий стек для значений дерева
        globalStack.push(node);

        let gaps = 32;                                      // начальное значение расстояния между элементами
        let isRowEmpty = false;

        let separator = "-----------------------------------------------------------------";
        console.log(separator);                      // черта для указания начала нового дерева

        while (!isRowEmpty) {
            let localStack = [];         // локальный стек для задания потомков элемента
            isRowEmpty = true;

            let outStr = "";
            for (let j = 0; j < gaps; j++)
                    outStr+=' ';

            while (!(globalStack.length===0)) {                // покуда в общем стеке есть элементы
                let temp = globalStack.pop();       // берем следующий, при этом удаляя его из стека
                if (temp != null) {
                    outStr+=temp.key;
                    //System.out.print(temp.getKey());      // выводим его значение в консоли
                    localStack.push(temp.left);   // сохраняем в локальный стек, наследники текущего элемента
                    localStack.push(temp.right);
                    if (temp.left != null || temp.right != null)
                        isRowEmpty = false;
                } else {
                    outStr+="__";                 // - если элемент пустой
                    localStack.push(null);
                    localStack.push(null);
                }

                for (let j = 0; j < gaps * 2 - 2; j++)
                    outStr+=' ';
            }
            console.log(outStr);

            gaps /= 2;                                      // при переходе на следующий уровень расстояние между элементами каждый раз уменьшается
            while (!(localStack.length===0)) {
                globalStack.push(localStack.pop());    // перемещаем все элементы из локального стека в глобальный
            }
        }
        console.log(separator);                       // подводим черту
    }   
}

class Util {
    static getHeightNode(node) {
        if (node === undefined || node === null) {
            return 0;
        }
        return node.height;
    }

    static max(a, b) {
        return (a > b) ? a : b;
    }

    static rightRotate(b) {
        let c = b.left;
        let temp = c.right;

        // Perform rotation
        c.right = b;
        b.left = temp;

        // Update heights
        b.height = Util.max(Util.getHeightNode(b.left), Util.getHeightNode(b.right)) + 1;
        c.height = Util.max(Util.getHeightNode(c.left), Util.getHeightNode(c.right)) + 1;

        // Return new root
        return c;
    }

    static leftRotate(a) {
        let b = a.right;
        let temp = b.left;

        // Perform rotation
        b.left = a;
        a.right = temp;

        //  Update heights
        a.height = Util.max(Util.getHeightNode(a.left), Util.getHeightNode(a.right)) + 1;
        b.height = Util.max(Util.getHeightNode(b.left), Util.getHeightNode(b.right)) + 1;

        // Return new root
        return b;
    }

    // Get Balance factor of node N
    static getBalanceFactor(node) {
        if (node === undefined || node === null) {
            return 0;
        }

        return Util.getHeightNode(node.left) - Util.getHeightNode(node.right);
    }

    static constructBST(tree, keys) {
        let root = null;
        for (let key of keys) {
            root = tree.insert(root, key);
        }
        return root;
    }

    
}

let tree = new AvlTree();
// let keys = [10, 20, 30, 40, 50, 25];
let keys = [75, 9, 18, 29, 17, 100, 88, 81];
// let root = Util.constructBST(tree, keys);

let root = null;
for (let key of keys) {
    root = tree.insert(root, key);
    tree.print2(root);
}


