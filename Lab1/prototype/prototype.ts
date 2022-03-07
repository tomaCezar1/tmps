interface ICustomerType {
  first?: string;
  last?: string;
  username?: string;
}

function Customer(first?: string, last?: string, username?: string) {
  this.first = first;
  this.last = last;
  this.username = username;

  this.getUsername = function () {
    console.log('username: ' + this.username);
  };
}

function CustomerPrototype(proto: ICustomerType) {
  this.clone = function () {
    let customer = new Customer();

    customer.first = proto.first;
    customer.last = proto.last;
    customer.username = proto.username;

    return customer;
  };
}

function run() {
  const customer = new Customer('clientFirstName', 'clientLastName', 'client1');
  const prototype = new CustomerPrototype(customer);

  const clonedCustomer = prototype.clone();

  // clonedCustomer.getUsername();
  // console.log(clonedCustomer);
  console.log(customer);
  console.log(prototype.clone());
}

run();

//JS uses prototypes when creating objects, it follows the Prototype pattern
// const CustomerBuilder = {
//   name: 'client',
//   usernmame: 'client-username',
//   getUsername: function () {
//     console.log(CustomerBuilder);
//     return this.username;
//   },
// };

// const customer1 = Object.create(CustomerBuilder);
// const customer2 = Object.create(CustomerBuilder);
// customer2.getUsername();
