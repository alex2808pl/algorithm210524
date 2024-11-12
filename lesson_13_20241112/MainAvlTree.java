package lesson_13_20241112;

public class MainAvlTree {
    public static void main(String[] args) {
        AvlTree tree = new AvlTree();
        // int[] keys = {10, 20, 30, 40, 50, 25};
        int[] keys = {75, 9, 18, 29, 17, 100, 88, 81};

        NodeTree root = null;
        for(int key : keys) {
            //tree.print2(root); 
            root = tree.insert(root, key);
            tree.print2(root); //визуализация
        }
       
    }
}
