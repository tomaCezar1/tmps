interface Command {
  execute: () => unknown;
}

class OrderManager {
  public orders;

  constructor() {
    this.orders = [];
  }

  execute(command) {
    return command.execute();
  }
}

class PlaceOrderCommand implements Command {
  public orders;
  public order;
  public id;

  constructor(orders, order, id) {
    this.orders = orders;
    this.order = order;
    this.id = id;
  }

  execute() {
    this.orders.push(this.id);
    console.log(`You have ordered ${this.order} with (${this.id})`);
  }
}

class CancelOrderCommand implements Command {
  public orders;
  public id;

  constructor(orders, id) {
    this.orders = orders;
    this.id = id;
  }

  execute() {
    console.log(`You have canceled order ${this.id}`);
    const filteredOrders = this.orders.filter((order) => order.id !== this.id);
    console.log(filteredOrders);
    return filteredOrders;
  }
}

class TrackOrderCommand {
  public orders;
  public id;

  constructor(orders, id) {
    this.orders = orders;
    this.id = id;
  }

  execute() {
    console.log(`${this.id} is shipped`);
  }
}

const manager = new OrderManager();
const orders = manager.orders;

const placeOrderCommand = new PlaceOrderCommand(orders, 'Pad Thai', '1');
const cancelOrderCommand = new CancelOrderCommand(orders, '1');
const trackOrderCommand = new TrackOrderCommand(orders, '1');

manager.execute(placeOrderCommand);
manager.execute(cancelOrderCommand);
manager.execute(trackOrderCommand);
