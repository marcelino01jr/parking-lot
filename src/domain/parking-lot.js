const ParkingTicket = require("./parking-ticket");

class ParkingLot {
  constructor(slots) {
    this.slots = slots;
    this.parkedCars = new Map(); 
    this.ticketCounter = 1;
  }

  park(car) {
    
    for (const parkedCar of this.parkedCars.values()) {
      if (parkedCar.plate === car.plate) {
        return `Car with plate ${car.plate} is already parked`;
      }
    }

    if (this.parkedCars.size >= this.slots) {
      return "Parking lot is full";
    }
    
    const ticketNumber = `TICKET-${this.ticketCounter++}`;
    const ticket = new ParkingTicket(ticketNumber);
    this.parkedCars.set(ticketNumber, car);
    return ticket;
  }

  retrieveCar(ticketNumber) {
    
    if (!this.parkedCars.has(ticketNumber)) {
      return "Invalid ticket";  
    }
    
    const car = this.parkedCars.get(ticketNumber);
    this.parkedCars.delete(ticketNumber); 
    return car;
  }
}

module.exports = ParkingLot;