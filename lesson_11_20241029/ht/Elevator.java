import java.util.Scanner;

public class Elevator {
      public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int totalFloors = 19;

        int elevatorA = 0;
        int elevatorB = 8;

        System.out.println("Введите этаж вызова: ");
        int callFloor = scanner.nextInt();

        String chosenElevator = getClosestElevator(elevatorA, elevatorB, callFloor);

        System.out.println("Отправляем лифт: " + chosenElevator);
    }

    public static String getClosestElevator(int elevatorA, int elevatorB, int callFloor) {

        int distanceA = Math.abs(elevatorA - callFloor);
        int distanceB = Math.abs(elevatorB - callFloor);

        if (distanceA < distanceB) {
            return "A";
        } else if (distanceB < distanceA) {
            return "B";
        } else {
            return "A";
        }
    }

}
