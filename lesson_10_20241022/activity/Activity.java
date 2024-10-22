package lesson_10_20241022.activity;

public class Activity {
    private String name;
    private int start;
    private int finish;
    private int cost; 

    public Activity(String name, int start, int finish) {
        this.name = name;
        this.start = start;
        this.finish = finish;
    }

    public Activity(String name, int start, int finish, int cost) {
        this.name = name;
        this.start = start;
        this.finish = finish;
        this.cost = cost;
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getStart() {
        return start;
    }

    public void setStart(int start) {
        this.start = start;
    }

    public int getFinish() {
        return finish;
    }

    public void setFinish(int finish) {
        this.finish = finish;
    }

    
    public int getCost() {
        return cost;
    }

}
