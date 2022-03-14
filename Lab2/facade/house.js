class Plumbingsystem {
  setPressure() {}
  turnOn() {}
  turnOff() {}
}

class ElectricalSystem {
  setVoltage(voltage) {}
  turnOn() {}
  turnOff() {}
}

class House {
  plumbing = new Plumbingsystem();
  electricalSystem = new ElectricalSystem();

  turnOnSystems() {
    this.electricalSystem.setPressure();
    this.electricalSystem.turnOn();
    this.plumbing.setVoltage();
    this.plumbing.turnOn();
  }

  shutdown() {
    this.electricalSystem.turnOff();
    this.plumbing.turnOff();
  }
}

const house = new House();
house.turnOnSystems();
house.shutdown();
