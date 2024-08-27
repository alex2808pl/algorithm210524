import java.util.Arrays;

public class BigO {
    static int size(int[] arr) { // O(1)
        return arr.length;
    }  

    static boolean lineFind(int[] arr, int val) { // O(n)
        int i;
        for (i = 0; i < arr.length; i++) {
            if(arr[i]==val) {
               System.out.println(val+" - находиться по индексу "+i); 
               return true;
            }
            
        }
        System.out.println(val+"не найден ("+i+")"); 
        return false;
    }  

     static void sortBubble(int[] arrInt) { //O(n^2)
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


    // Анализируем
    // - сравнения («больше», «меньше», «равно»);
    // - присваивания;
    // - выделение памяти.

    static int sum (int one, int two) { 
        int result = one + two; //cost = 1+1
        return result; // +1
    }
    // O(3) ~ O(1)

    static int sum1 (int one, int two) { 
        return  one + two; //cost = 1+1
    }
    // O(2) ~ O(1)

    static int sum(int[] array)  { //O(n)
        int sum = 0;  //cost = 1
        for (int i = 0; i < array.length; i++) { //cost = 1+ 1*n +1*n
            sum = sum + array[i];  // cost = 2 n
        }
        return sum; // cost = 1
    } 
    // 1 + 1 + n + n + 2n + 1 = O(3 + 4n)  ~> O(n)

    static void doubleFor(int n) {
        for (int i = 0; i < n/3; i++) { //const = 1 + (n/3) + (n/3) 
            for (int j = 0; j <= n; j = j + 4) { // const = 1 + n + (1 + 1)*n 
                System.out.println("Hello ["+i+"] ["+j+"]"); //+1*n 
            }
        }
    }
    //  (1 + 2n/3) * (1 + 3n) = n*n = 0(n^2)


    static void nlog(int n) {
        for(int i = 0; i < n; i++) //const = 3, (1 + (n) + (n)) times = n
            for(int j = 1; j < n; j = j * 2) // const = 4 (1 + 1*n*2 + 1*n*2 ),   log 2 (6) = 3 log 3 (6 ) ~ 2    times = log n
                System.out.println("Hello ["+i+"] ["+j+"]"); //константное время //+1*n
    }
    // (1+2n) * (1+3*logn) = 1 +3logn+ 2n + 6n*logn =  3*logn + 2n + 6n*log(n)  = O(n log(n))



    public static void main(String[] args) {
        int[] array = {1,2,3,4,5,6}; //
        System.out.println("Size O(1) = "+size(array));

        System.out.println("Лин.поиск O(n)= "+lineFind(array, 6));

        int[] array1 = {1,5,3,6,2,4}; 
        sortBubble(array1);
        System.out.println("Пузырек (O(n^2))= "+Arrays.toString(array1));

        System.out.println("Сумма (O(n))= "+sum(array));

        bubleFor(6);
    }
}
