const ParkingLot = require("../domain/parking-lot");
const Car = require("../domain/car");
const ParkingTicket = require("../domain/parking-ticket");

describe("ParkingLot", () => {
  it("should return a ParkingTicket when a car is parked (Given-When-Then)", () => {
    // Given
    const parkingLot = new ParkingLot(2);
    const car = new Car("B 1234 ABC");

    // When
    const ticket = parkingLot.park(car);

    // Then
    expect(ticket).toBeInstanceOf(ParkingTicket);
    expect(ticket.ticketNumber).toMatch(/TICKET-\d+/);
  });

  it("should return 'Parking lot is full' when parking lot is full (Given-When-Then)", () => {
    // Given
    const parkingLot = new ParkingLot(1);
    const car1 = new Car("B 1234 ABC");
    const car2 = new Car("B 5678 DEF");

    // When
    parkingLot.park(car1);
    const result = parkingLot.park(car2);

    // Then
    expect(result).toBe("Parking lot is full");
  });

  it("should not allow parking a car with the same plate (Given-When-Then)", () => {
    // Given
    const parkingLot = new ParkingLot(2);
    const car1 = new Car("B 1234 ABC");
    const car2 = new Car("B 1234 ABC"); // Mobil dengan plat yang sama

    // When
    parkingLot.park(car1);
    const result = parkingLot.park(car2);

    // Then
    expect(result).toBe("Car with plate B 1234 ABC is already parked");
  });

  it("should return the car for a valid ticket (Given-When-Then)", () => {
    // Given
    const parkingLot = new ParkingLot(2);
    const car = new Car("B 1234 ABC");
    const ticket = parkingLot.park(car);

    // When
    const retrievedCar = parkingLot.retrieveCar(ticket.ticketNumber);

    // Then
    expect(retrievedCar).toBe(car);
  });

  it("should return 'Invalid ticket' for an invalid ticket (Given-When-Then)", () => {
    // Given
    const parkingLot = new ParkingLot(2);

    // When
    const result = parkingLot.retrieveCar("INVALID-TICKET");

    // Then
    expect(result).toBe("Invalid ticket");
  });
});