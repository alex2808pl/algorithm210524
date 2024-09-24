package lesson_6_20240924.practice;

public class Prime {
    public static void main(String[] args) {
        System.out.println(isPrime(7));
        System.out.println(isPrime(10));
    }


    private static boolean isPrime(int number) {
        if (number == 0 || number == 1)
            return true;

        return div(number, 2);
    }

    private static boolean div(int number, int divider) {
        if (number == divider)
            return true;

        if (number % divider == 0)
            return false;
        else
            return div(number, divider + 1);
    }
}
