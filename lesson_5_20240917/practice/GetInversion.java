package lesson_5_20240917.practice;

public class GetInversion {

    public static void main(String[] args) {
        int[] arr = /*{8, 4, 2, 1}*/ {3, 1, 2};
        int countInversion = getInversion(arr); 
        System.out.println("Count inversion = "+countInversion);
    }

    private static int getInversion(int[] arr) {
        int count = 0;
        for (int i = 0; i < arr.length; i++) {
            for (int j = i+1; j < arr.length; j++) {
                if(arr[i] > arr[j]) {
                    System.out.println(arr[i]+","+arr[j]);
                    count++;
                }
            }
        }
        return count;
    }

}
