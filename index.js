const ParkingLot = require("./src/domain/parking-lot");
const Car = require("./src/domain/car");

const parkingLot = new ParkingLot(4);
const car1 = new Car("B2");
const car2 = new Car("B1");
const car3 = new Car("B2");

// Parkir mobil
console.log(parkingLot.park(car1)); 
console.log(parkingLot.park(car2)); 
console.log(parkingLot.park(car3)); 
// Mengambil mobil
const ticket1 = parkingLot.park(car1); 
console.log(parkingLot.retrieveCar(ticket1.ticketNumber)); 
// Menggunakan tiket tidak valid
console.log(parkingLot.retrieveCar("INVALID-TICKET")); 