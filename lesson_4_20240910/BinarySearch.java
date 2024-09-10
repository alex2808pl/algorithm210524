package lesson_4_20240910;

import java.util.Arrays;

public class BinarySearch {
 public static void main(String[] args) {
        int[] array = {1, 3, 4, 8, 22, 98};
        int key = 22;
        //int key = 2;
        //Arrays.sort(array); // condition for binary search - sorted array
        System.out.println(Arrays.toString(array));

        // calling a method and outputting the result to the console
        System.out.println("Index (Iteration) = "+binarySearchIterat(array, key, 0, array.length - 1));

        System.out.printf("Index (Recurs) = %d%n", binarySearchRecurs(array, key, 0, array.length - 1));


    }
    private static int binarySearchIterat(int[] sortedArray, int valueToFind, int low, int high) {
        int index = -1;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (sortedArray[mid] < valueToFind) {
                low = mid + 1;
            } else if (sortedArray[mid] > valueToFind) {
                high = mid - 1;
            } else if (sortedArray[mid] == valueToFind) {
                index = mid;
                break;
            }
        }
        return index;
    }

    private static int binarySearchRecurs(int[] values, int valueToFind, int low, int high) {
        if (low == high) {
            return (values[low] == valueToFind) ? low : -1;
        }

        int mid = low + (high - low) / 2;

        if (valueToFind > values[mid]) {
            return binarySearchRecurs(values, valueToFind, mid + 1, high);
        } else if (values[mid] > valueToFind) {
            return binarySearchRecurs(values, valueToFind, low, mid - 1);
        }
        return mid;
    }
}
