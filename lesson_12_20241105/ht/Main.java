package lesson_12_20241105.ht;

public class Main {
    public static void main(String[] args) {
        BinaryTree tree = new BinaryTree();
        tree.root = new TreeNode(13);
        tree.root.left = new TreeNode(5);
        tree.root.right = new TreeNode(15);
        tree.root.left.left = new TreeNode(6); // не правильное размещение
        tree.root.left.right = new TreeNode(3); // не правильное размещение

        System.out.println("Is BST: " + tree.isValidBST(tree.root)); // false

        tree.recoverTree(tree.root); // исправляем проблему

        System.out.println("Is BST after recovery: " + tree.isValidBST(tree.root)); // true
    }
}
