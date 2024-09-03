package lesson_3_20240903;

public class Sum {
    public static void main(String[] args) {
        int[] array = {1,2,3,4,5,6,7};
        System.out.println("Sum = " +sum(array));
        System.out.println("SumIteration = " +sumIteration(5));
        System.out.println("SumIteration = " +sumIterationReverse(5));
        System.out.println("SumRecursive = " +sumRecursive(5));
    }

    static int sum(int[] arr) {
        int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum; 
    }

    static int sumIteration(int n) {
        int sum = 0;
        for (int i = 1; i <= n; i++) {
            sum += i;
        }
        return sum; 

    }

    static int sumIterationReverse(int n) {
        int sum = 0;
        for (int i = n; i > 0 ; i--) {
            sum += i;
        }
        return sum; 
    }

    
    static int sumRecursive(int n) {
        if(n==1) {
            return 1;
        }
        int sum = n + sumRecursive(n-1);
        return sum;
    }
    
    // sumRecursive(5) 
    //   5 + sumRecursive(4) 
    //      4 + sumRecursive(3) 
    //         3 + sumRecursive(2)   
    //            2 + sumRecursive(1)
    //               return 1
    //            return 2 + 1 = 3 
    //         return 3 + 3 = 6
    //      return 4 + 6 = 10
    //   return 5 + 10; 
    //  sum = 15  
}
