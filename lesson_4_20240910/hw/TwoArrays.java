package lesson_4_20240910.hw;

import java.util.Arrays;

public class TwoArrays {
    public static void main(String[] args) {
        int[] arr1 = {100, 112, 256, 349, 770};
        int[] arr2 = {72, 86, 113, 119, 265, 445, 892};
        int k = 10;
        System.out.println("k-th element is: " + findKthElement(arr1, arr2, k));
    }

    public static int findKthElement(int[] arr1, int[] arr2, int k) {
        int i = 0, j = 0, count = 0, kthElement = 0;

        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                kthElement = arr1[i];
                i++;
            } else {
                kthElement = arr2[j];
                j++;
            }
            count++;
            if (count == k) {
                return kthElement;
            }
        }

        // If we reach the end of one array
        while (i < arr1.length) {
            kthElement = arr1[i];
            i++;
            count++;
            if (count == k) {
                return kthElement;
            }
        }

        while (j < arr2.length) {
            kthElement = arr2[j];
            j++;
            count++;
            if (count == k) {
                return kthElement;
            }
        }
        return -1; // This line should theoretically never be reached
    }
}
