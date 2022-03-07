interface WorkerFactory {
  create: (name: string) => {};
}

function Employee(name) {
  this.name = name;

  this.say = function () {
    console.log('I am employee ' + name);
  };
}

class EmployeeFactory implements WorkerFactory {
  create = function (name) {
    return new Employee(name);
  };
}

function Vendor(name) {
  this.name = name;

  this.say = function () {
    console.log('I am vendor ' + name);
  };
}

function VendorFactory() {
  this.create = function (name) {
    return new Vendor(name);
  };
}

function run() {
  var persons = [];
  var employeeFactory = new EmployeeFactory();
  var vendorFactory = new VendorFactory();

  persons.push(employeeFactory.create('John'));
  persons.push(vendorFactory.create('Vlad'));

  for (var i = 0, len = persons.length; i < len; i++) {
    persons[i].say();
  }
}
