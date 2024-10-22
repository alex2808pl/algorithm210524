package lesson_10_20241022.coin;

import java.util.ArrayList;
import java.util.List;

public class NumberOfCoin {
    public static void main(String[] args) {
        int[] coins = {1, 2, 5, 10};
        //int[] coins = {1, 4, 6}; // жадный алгоритм работает не оптимально
        getChange(68, coins);
    }

    public static void getChange(int sum, int[] coins) {
        List<Integer> result = new ArrayList<>();
        for (int i = coins.length - 1; i >= 0; i--) {
            while (sum >= coins[i]) {
                sum -= coins[i];
                result.add(coins[i]);
            }
        }
        for (int i = 0; i < result.size(); i++) {
            System.out.print(" " + result.get(i));
        }
        System.out.println();
    }

}
