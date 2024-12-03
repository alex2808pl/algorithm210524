package lesson_15_20241126.hw;

public class Task2 {
    public static void findPairSumTwoPoint(int[] array1, int[] array2) {
        int lengthN = array1.length;
        int lengthM = array2.length;

        int firstElement = array1[0];
        int secondElement = array2[0];
        int minModul = Math.abs(array1[0] - array2[0]);

        int i = 0; // first pointer 
        int j = 0; // second pointer 

        while (i < lengthN && j < lengthM) {
            
            int tempModul = Math.abs(array1[i] - array2[j]);
            if (minModul > tempModul) {
                minModul = tempModul;
                firstElement = array1[i];
                secondElement = array2[j];
            }

            if(array1[i] < array2[j]) {
               i++;
            }
            else  {
               j++;
            }

        }
        System.out.println(firstElement);
        System.out.println(secondElement);
    }

    public static void main(String[] args) {
        int[] array1 = {1, 2, 10, 29};
        int[] array2 = {8, 20, 30};

        findPairSumTwoPoint(array1, array2);
    }
}
