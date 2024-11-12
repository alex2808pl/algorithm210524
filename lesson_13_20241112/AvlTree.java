package lesson_13_20241112;

import java.util.Stack;

public class AvlTree {
    private NodeTree root;

    public NodeTree insert(NodeTree node, int key) {

        /* 1.  Perform the normal BST insertion */
        // if the root is null, create a new node and return it
        if (node == null) {
            NodeTree res = new NodeTree();
            res.setKey(key);
            return res;
        }

        // if the given key is less than the root node,
        // recur for the left subtree
        if (key < node.getKey()) {
            node.setLeft(insert(node.getLeft(), key));
        }
        else { // otherwise, recur for the right subtree
            // key >= root.key
            node.setRight(insert(node.getRight(), key));
        }

        NodeTree returnNode = balanceTree(key, node);

        return returnNode;
    }

    private NodeTree balanceTree(int key, NodeTree newNode) {
        /* 2. Update height of this parent node */
        newNode.setHeight(1 + Util.max(Util.getHeightNode(newNode.getLeft()), Util.getHeightNode(newNode.getRight())));

        /* 3. Get the balance factor */
        int balance = Util.getBalanceFactor(newNode);

        // If this node becomes unbalanced, then there
        // are 4 cases LeftLeft Case
        if (balance > 1 && key < newNode.getLeft().getKey())
            return Util.leftRotate(newNode);

        // RightRight Case
        if (balance < -1 && key > newNode.getRight().getKey())
            return Util.leftRotate(newNode);

        // LeftRight Case
        if (balance > 1 && key > newNode.getLeft().getKey()) {
            newNode.setLeft(Util.leftRotate(newNode.getLeft()));
            return Util.rightRotate(newNode);
        }

        // RightLeft Case
        if (balance < -1 && key < newNode.getRight().getKey()) {
            newNode.setRight(Util.rightRotate(newNode.getRight()));
            return Util.leftRotate(newNode);
        }

        /* return the (unchanged) node pointer */
        return newNode;
    }

    public void print2(NodeTree node) {                                   // метод для вывода дерева в консоль
        Stack<NodeTree> globalStack = new Stack<>();            // общий стек для значений дерева
        globalStack.push(node);

        int gaps = 32;                                      // начальное значение расстояния между элементами
        boolean isRowEmpty = false;

        String separator = "-----------------------------------------------------------------";
        System.out.println(separator);                      // черта для указания начала нового дерева

        while (!isRowEmpty) {
            Stack<NodeTree> localStack = new Stack<>();         // локальный стек для задания потомков элемента
            isRowEmpty = true;

            for (int j = 0; j < gaps; j++)
                System.out.print(' ');

            while (!globalStack.isEmpty()) {                // покуда в общем стеке есть элементы
                NodeTree temp = (NodeTree) globalStack.pop();       // берем следующий, при этом удаляя его из стека
                if (temp != null) {
                    System.out.print(temp.getKey());      // выводим его значение в консоли
                    localStack.push(temp.getLeft());   // сохраняем в локальный стек, наследники текущего элемента
                    localStack.push(temp.getRight());
                    if (temp.getLeft() != null ||
                            temp.getRight() != null)
                        isRowEmpty = false;
                } else {
                    System.out.print("__");                 // - если элемент пустой
                    localStack.push(null);
                    localStack.push(null);
                }

                for (int j = 0; j < gaps * 2 - 2; j++)
                    System.out.print(' ');
            }
            System.out.println();
            gaps /= 2;                                      // при переходе на следующий уровень расстояние между элементами каждый раз уменьшается
            while (!localStack.isEmpty()) {
                globalStack.push(localStack.pop());    // перемещаем все элементы из локального стека в глобальный
            }
        }
        System.out.println(separator);                      // подводим черту
    }   

}
