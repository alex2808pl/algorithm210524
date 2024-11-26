package lesson_15_20241126;

public class TwoPoints {

        // Стандарный перебор
    public static void findPairSumStandart(int[] arr, int sum) {
        int length = arr.length;

        for (int i = 0; i < length - 2; i++) {
            int currentSum = 0;
            for (int j = i+1; j < length-1; j++) {
                currentSum = arr[i] + arr[j];
                if(currentSum == sum) {
                    System.out.println("Yes Standart : "+arr[i]+" + "+arr[j]+" = "+sum );
                    return;
                }
            }
        }
        System.out.println("Not found Standart!");
    }

    public static void findPairSumTwoPoint(int[] arr, int sum) {
        int i = 0;
        int j = arr.length - 1;

        while(i < j) {
            int currentSum = arr[i] + arr[j];
            if( currentSum == sum) {
                System.out.println("Yes TwoPoint : "+arr[i]+" + "+arr[j]+" = "+sum );
                return;
            } else if(currentSum < sum) {
                i++;
            } else {
                j--;
            }
        }
        System.out.println("Not found TwoPoint!");
    }

    public static void main(String[] args) {
        int[] arr = {1,2,3,4,6};
        int sum = 6;
        findPairSumTwoPoint(arr, sum);
        findPairSumStandart(arr, sum);
    }

}




