package lesson_11_20241029.knapsak;

import java.util.Arrays;
import java.util.Comparator;

public class FractionalKnapsack {
    public static void main(String[] args) {
        int[] weight = {10, 20, 30};
        int[] value = {60, 100, 120};     
        int totalWeight = 50;

        Item[] items = new Item[weight.length];
        for (int i = 0; i < items.length; i++) {
            items[i] = new Item(weight[i], value[i]);
        }

        int knapsackValue = fillFractionalKnapsack(items, totalWeight);
        System.out.println("Заработаем = "+knapsackValue);

    }

    
    private static int fillFractionalKnapsack(Item[] items, int totalWeight) {
        Arrays.sort(items, Comparator.comparingInt(Item::getCost).reversed());
        //Arrays.sort(items, (i1,i2) -> i2.getCost() - i1.getCost());  
        
        Item[] bagItems = new Item[items.length];
        int totalValue = 0;
        
        for (int i = 0; i < items.length; i++) {
            Item item = items[i];
            int curWeight = item.getWeight();
            int curValue = item.getValue();
            
            if(totalWeight - curWeight >=0) { // ложим в рюкзак целый кусок
                bagItems[i] = item;
                totalWeight -= curWeight;
                totalValue += curValue; 
                item.setFraction(curWeight);
            } 
            else { //логика отрезания куска
                int fraction = totalWeight; //оставшееся количество, которое нам нужно в рюкзак положить - отрезаем
                totalWeight -= fraction; // ложим кусок отрезанный в рюкзак
                totalValue += (item.getCost()*fraction); // добавили в общую стоимость отрезанного куска
                item.setFraction(fraction); 
                bagItems[i] = item;
                if(totalWeight == 0) {
                    break;
                }
            }
        }
        System.out.println(Arrays.toString(bagItems));
        return totalValue;
    }

}

//        Стоимость за 1 кг.
//        60 / 10 = 6
//        100 / 20 = 5
//        120 / 30 = 4

//        Стратегия 1 (делить нельзя) - жадный алгоритм не работает
//          50 - 10 -> 60 [40]
//          40 - 20 -> 100 [20]
//          res = 160 [30]

//        Стратегия 2 (делить можно) - жадный алгоритм работает
//          50 - 10 -> 60 [40]
//          40 - 20 -> 100 [20]
//          20 - 20*4 -> 80 [0]
//          res = 240

//        Стратегия 3 (количество слитков не ограничено) - жадный алгоритм работает
//          50 - 5*10 -> 300 [40]
//          res = 300