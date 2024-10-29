package lesson_11_20241029.knapsak;

public class Item {
    private int weight;
    private int value; // общая стоимость
    private int cost; // стоимость за единицу
    private int fraction; //вес отрезанного куска
    
    public Item(int weight, int value) {
        this.weight = weight;
        this.value = value;
        this.cost = value / weight;
    }

    public int getWeight() {
        return weight;
    }

    public int getValue() {
        return value;
    }

    public int getCost() {
        return cost;
    }

    public int getFraction() {
        return fraction;
    }

    public void setFraction(int fraction) {
        this.fraction = fraction;
    }

    @Override
    public String toString() {
        return "Item{" +
                "weight=" + weight +
                ", value=" + value +
                ", cost=" + cost +
                ", fraction=" + fraction +
                '}';
    }

}
