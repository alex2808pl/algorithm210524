package lesson_10_20241022.ht;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class MainJob {
    public static void main(String[] args) {
        List<Task> tasks = new ArrayList<>();
        tasks.add(new Task("a",3,10));
        tasks.add(new Task("b",2,8));
        tasks.add(new Task("c",1,5));
        tasks.add(new Task("d",3,11));
        tasks.add(new Task("e",4,15));
        tasks.add(new Task("g",5,17));

        int maxTime = 11; //сколько времени я могу уделить

        System.out.println("Критерий (макс количество задач) = "+taskSelectionTime(tasks, maxTime));

        System.out.println("Критерий макс сумма = "+taskSelectionCost(tasks, maxTime));

        System.out.println("Критерий удельная цена  (стоимость / время) = "+taskSelectionRealCost(tasks, maxTime));


    }
    public static List<Task> taskSelectionTime(List<Task> tasks, int maxTime) {
        tasks.sort(Comparator.comparingInt(Task::getTime));
        int totalTime = 0;
        List<Task> res = new ArrayList<>();
        for(Task t : tasks) {
            totalTime += t.getTime();
            if(totalTime <= maxTime) {
                res.add(t);
            } 
            else {
                break;
            }
        }
        return res;
    }

    public static List<Task> taskSelectionCost(List<Task> tasks, int maxTime) {
        tasks.sort(Comparator.comparingInt(Task::getCost).reversed());
        int totalTime = 0;
        List<Task> res = new ArrayList<>();
        for(Task t : tasks) {
            totalTime += t.getTime();
            if(totalTime <= maxTime) {
                res.add(t);
            } 
            else {
                break;
            }
        }
        return res;
    }

    public static List<Task> taskSelectionRealCost(List<Task> tasks, int maxTime) { //удельная цена за единицу времени
        tasks.sort((a,b)->{
            float aCost = (float)a.getCost()/a.getTime();
            float bCost = (float)b.getCost()/b.getTime();
            if(aCost > bCost) return -1;
            else if(aCost < bCost) return 1;
            else return 0;
        });
        System.out.println(tasks);
        int totalTime = 0;
        List<Task> res = new ArrayList<>();
        for(Task t : tasks) {
            totalTime += t.getTime();
            if(totalTime <= maxTime) {
                res.add(t);
            } 
            else {
                break;
            }
        }
        return res;
    }

}
