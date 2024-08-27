import java.util.Arrays;

public class SortBubble {
    public static void main(String[] args) {
        int[] arrInt = {22, 5, 1, 3, 2, 50};
        System.out.println(Arrays.toString(arrInt));
        sortBubble(arrInt);
        System.out.println("Осортирован - "+Arrays.toString(arrInt));
    }

     static void sortBubble(int[] arrInt) {
        boolean isSorted;
        do{
            isSorted = false; // отслеживает факт перемещения
            for (int i = 0; i < arrInt.length - 1; i++) {
                if (arrInt[i] > arrInt[i + 1]) {
                    int temp = arrInt[i];
                    arrInt[i] = arrInt[i + 1];
                    arrInt[i + 1] = temp;
                    isSorted = true;
                    System.out.println(Arrays.toString(arrInt));
                }
            }
        } while (isSorted);
    }

}
