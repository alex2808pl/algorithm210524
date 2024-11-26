package lesson_15_20241126;

public class WindowSliding {
    public static void main(String[] args) {
        
        int[] arr = {1, 55, 2, 10, 2, 13, 66, 0, 3};
        int k = 3;
        System.out.println("maxSumStandart = "+maxSumStandart(arr, k));
        System.out.println("maxSumSlidingWindow = "+maxSumSlidingWindow(arr, k));       
    }

    // Стандарный перебор
public static int maxSumStandart(int[] arr, int k) {
    int length = arr.length;
    int max = 0;

    for (int i = 0; i < length - k + 1; i++) {
        int current = 0;
        for (int j = 0; j < k; j++) {
            current = current + arr[i + j];
            max = Math.max(current, max);
        }
    }
    return max;
}

// Подход скользящее окно
public static int maxSumSlidingWindow(int[] arr, int k) {
        int length = arr.length;
        if (length < k) {
            System.out.println("wrong size of array");
            return -1;
        }

        int max = 0;
        for (int i = 0; i < k; i++)
            max += arr[i];

        int windowSum = max;
        for (int i = k; i < length; i++) {
            windowSum += arr[i] - arr[i - k];
            max = Math.max(max, windowSum);
        }

        return max;
    }
}
