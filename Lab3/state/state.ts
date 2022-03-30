interface State {
  cancelOrder();
  verifyPayment();
  shipOrder();
}

class Order implements State {
  public currentState: State;

  constructor() {
    this.currentState = new OrderBeingPrepared();
  }

  public setState(state: State) {
    this.currentState = state;
  }

  public getCurrentState(): State {
    return this.currentState;
  }

  cancelOrder() {
    this.currentState.cancelOrder();
  }

  verifyPayment() {
    this.currentState.verifyPayment();
  }

  shipOrder() {
    this.currentState.shipOrder();
  }
}

class CancelledOrderState implements State {
  public cancelOrder() {
    console.log('This order is already cancelled.');
  }

  public verifyPayment() {
    console.log('The order is cancelled, you cannot pay');
  }

  public shipOrder() {
    console.log('The order is cancelled, you cannot ship it');
  }
}

class PaymentPendingState implements State {
  cancelOrder() {
    console.log('Cancelling your order');
  }

  verifyPayment() {
    console.log('Payment verified');
  }

  shipOrder() {
    console.log('Cannot ship order when payment is pending.');
  }
}

class OrderBeingPrepared implements State {
  cancelOrder() {
    console.log('Cancelling order');
  }
  verifyPayment() {
    console.log('Payment is already verified');
  }
  shipOrder() {
    console.log('Shipping your order');
  }
}

class OrderShippedState implements State {
  cancelOrder() {
    console.log('You cannot cancel an order that has been shipped.');
  }
  verifyPayment() {
    console.log('Payment is already verified.');
  }
  shipOrder() {
    console.log('Order is already shipped.');
  }
}

let order = new Order();

order.verifyPayment();
order.shipOrder();
order.cancelOrder();

console.log('-----------');

order.setState(new CancelledOrderState());
order.verifyPayment();
order.shipOrder();
order.cancelOrder();

console.log('-----------');

console.log('Order state: ' + order.getCurrentState());
