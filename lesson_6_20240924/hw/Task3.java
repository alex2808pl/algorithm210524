package lesson_6_20240924.hw;

import java.util.Arrays;
import java.util.Stack;

public class Task3 {
  public static void main(String args[]) {
        int[] unsorted = {7, -2, 4, 1, 6, 5, 0, -4, 2};
        System.out.println("Несортированный массив : " + Arrays.toString(unsorted));
        iterativeQsort(unsorted);
        System.out.println("Сортированный массив : " + Arrays.toString(unsorted));
        //Несортированный массив : [7, -2, 4, 1, 6, 5, 0, -4, 2]
        //Сортированный массив : [-4, -2, 0, 1, 2, 4, 5, 6, 7]
    }

    public static void iterativeQsort(int[] numbers) {
        Stack stack = new Stack();
        stack.push(0);
        stack.push(numbers.length);
        while (!stack.isEmpty()) {
            int end = (int) stack.pop();
            int start = (int) stack.pop();
            if (end - start < 2) {
                continue;
            }
            int p = start + ((end - start) / 2);
            p = partition(numbers, p, start, end);
            stack.push(p + 1);
            stack.push(end);
            stack.push(start);
            stack.push(p);
        }
    }
    private static int partition(int[] input, int position, int start, int end) {
        int l = start;
        int h = end - 2;
        int piv = input[position];
        swap(input, position, end - 1);
        while (l < h) {
            if (input[l] < piv) {
                l++;
            } else if (input[h] >= piv) {
                h--;
            } else {
                swap(input, l, h);
            }
        }
        int idx = h;
        if (input[h] < piv) {
            idx++;
        }
        swap(input, end - 1, idx);
        return idx;
    }
    private static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

}
