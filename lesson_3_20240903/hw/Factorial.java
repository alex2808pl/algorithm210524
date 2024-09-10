package lesson_3_20240903.hw;
//1. Реализовать метод вычисления факториала (n!) рекурсивным и итеративным способами.
public class Factorial {
    public static void main(String[] args) {
        int n = 5;
        System.out.println("Факториал итеративно " + n + " = " + factorialIteration(n));
        System.out.println("Факториал рекурсивно " + n + " = " + factorialRecursive(n));
    }

    static int factorialIteration(int n) {
        int res = 1;
        for (int i = 1; i <= n; i++) {
            res *= i;
        }
        return res;
    }

    static int factorialRecursive(int n) {
        if (n == 1) {
            return 1;
        }
        int res = n * factorialRecursive(n - 1);
        return res;
    }
}
