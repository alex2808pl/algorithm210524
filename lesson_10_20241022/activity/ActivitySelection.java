package lesson_10_20241022.activity;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class ActivitySelection {
 public void selectActivity(List<Activity> list) {
        list.sort(Comparator.comparingInt(Activity::getFinish).thenComparing((a,b) -> b.getCost() - a.getCost())); // правила сортировки
        List<Activity> res = new ArrayList<>();

        print(list);
        System.out.println("------------");

        Activity first = list.get(0);
        int last = first.getFinish(); // следующее свободное время
        res.add(first);

        for(int i = 1; i < list.size(); i++) {
            if(list.get(i).getStart() >= last) {
                res.add(list.get(i));
                last = list.get(i).getFinish();
            }
        }
        print(res); // список выбранных событий
    }

    private void print(List<Activity> list) {
        for (Activity e : list) {
            System.out.println(e.getName() + "  "+e.getStart()+"->"+e.getFinish());
        }
    }
}
