function getClosestElevator(elevatorA, elevatorB, callFloor) {

    let distanceA = Math.abs(elevatorA - callFloor);
    let distanceB = Math.abs(elevatorB - callFloor);

    if (distanceA < distanceB) {
        return "A";
    } else if (distanceB < distanceA) {
        return "B";
    } else {
        return "A";
    }
}

let elevatorA = 0;
let elevatorB = 8;
let callFloor = 5; //вызываем с этажа

let chosenElevator = getClosestElevator(elevatorA, elevatorB, callFloor);

console.log("Отправляем лифт: " + chosenElevator);