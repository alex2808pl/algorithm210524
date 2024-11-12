package lesson_12_20241105.ht;

public class BinaryTree {
    TreeNode root;

    // проверка дерева на правильность требованиям BST
    boolean isBST(TreeNode node, int min, int max) {
        if (node == null)
            return true;

        if (node.val <= min || node.val >= max)
            return false;

        return isBST(node.left, min, node.val) && isBST(node.right, node.val, max);
    }

    boolean isValidBST(TreeNode root) {
        return isBST(root, Integer.MIN_VALUE, Integer.MAX_VALUE);
    }

    // востановление дерева согласно требованиям BST
    void recoverTree(TreeNode root) {
        TreeNode[] nodes = new TreeNode[3];
        recoverTreeHelper(root, nodes);
        TreeNode first = nodes[0], middle = nodes[1], last = nodes[2];

        if (first != null && last != null) {
            int temp = first.val;
            first.val = last.val;
            last.val = temp;
        } else if (first != null && middle != null) {
            int temp = first.val;
            first.val = middle.val;
            middle.val = temp;
        }
    }

    TreeNode prev = null, first = null, middle = null, last = null;

    void recoverTreeHelper(TreeNode root, TreeNode[] nodes) {
        if (root != null) {
            recoverTreeHelper(root.left, nodes);

            if (prev != null && prev.val >= root.val) {
                if (first == null) {
                    first = prev;
                    middle = root;
                } else {
                    last = root;
                }
            }
            prev = root;
            recoverTreeHelper(root.right, nodes);
        }
        nodes[0] = first;
        nodes[1] = middle;
        nodes[2] = last;
    }
}
