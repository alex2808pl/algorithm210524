package lesson_3_20240903.hw;

public class Task2 {
    public static void main(String[] args) {
        System.out.println(funRecursion(5, 1));
        System.out.println(funIteration(5, 1));
    }

    private static int funRecursion(int x, int y) {
        if (x == 0) {
            return y;
        } else {
            int res = funRecursion(x - 1, x + y);
            System.out.println("res = " + res + "; x = " + x + "; y = " + y);
            return res;
        }
     }

     private static int  funIteration(int x, int y) {
        int res = 0;
        while(x !=0 ) {
            res = x + y;
            System.out.println("res = " + res + "; x = " + x + "; y = " + y);
            x =  x - 1;
            y = res;
        }
        return y;
    }
}
