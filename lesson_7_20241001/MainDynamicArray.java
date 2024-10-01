package lesson_7_20241001;

import java.util.Arrays;

public class MainDynamicArray {
    public static void main(String[] args) {
        DynamicArray da = new DynamicArray();
        da.add(1);
        da.add(2);
        da.add(3);
        da.add(4);
        da.add(5);
        da.add(6);
        da.add(7);
        da.add(8);
        da.add(9);
        System.out.println(Arrays.toString(da.array));

        da.addAt(4, 11);
        System.out.println(Arrays.toString(da.array));
        System.out.println("Count = "+ da.count);

        da.remove();
        da.removeAt(4);
        System.out.println(Arrays.toString(da.array));
        System.out.println("Count = "+ da.count);
    }
}
