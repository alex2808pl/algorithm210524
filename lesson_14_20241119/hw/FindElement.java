package lesson_14_20241119.hw;

import java.util.HashMap;

public class FindElement {
    public static void main(String[] args) {
        int[] arr = {1, 7, 4, 3, 4, 8, 7};
        int n = arr.length;
        int k = 2;
        System.out.println(firstElementNative(arr, n, k));

        System.out.println(firstElementMap(arr, n, k));

    }
    public static int firstElementNative(int[] arr, int n, int k) {
        // This loop is used for selection of elements
        for (int i = 0; i < n; i++) {
            int count = 0; // Count how many times selected element occurs
            for (int j = i; j < n; j++) {
                if (arr[i] == arr[j]) {
                    count++;
                }
            }
            if (count == k) { // Check, if it occurs k times or not
                return arr[i];
            }
        }
        return -1;
    }

    public static int firstElementMap(int[] arr, int n, int k) {
        // unordered map to count occurrences of each element
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < n; i++) {
            int a = 0;
            if (map.get(arr[i]) != null) {
                a = map.get(arr[i]);
            }
            map.put(arr[i], a + 1);
        }
        for (int i = 0; i < n; i++) { // if count of element == k ,then it is the required first element
            if (map.get(arr[i]) == k) {
                return arr[i];
            }
        }
        return -1;
    }

   
}
