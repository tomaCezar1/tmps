interface IPayment {
  id: string | number;
  total: number;
  submitPayment: Function;
}

class Payment implements IPayment {
  public id: string;
  public total: number;

  constructor(id: string, total: number) {
    this.id = id;
    this.total = total;
  }

  public submitPayment() {
    console.log(`Payment Amount ${this.total} for ${this.id}`);
  }
}

interface IOtherPayment {
  id: number;
  amount: number;
  sendPayment: Function;
}

class OtherPayment implements IOtherPayment {
  public id: number;
  public amount: number;

  constructor(id: number, amount: number) {
    this.id = id;
    this.amount = amount;
  }

  public sendPayment() {
    console.log(`3rd Party Payment Amount ${this.amount} for ${this.id}`);
  }
}

enum PaymentTypes {
  ThirdParty,
  Standard,
}

class PaymentAdapter implements IPayment {
  public id: string | number;
  public total: number;
  public type: PaymentTypes;

  constructor(id: string | number, total: number, type: PaymentTypes) {
    this.id = id;
    this.type = type;
    this.total = total;
  }

  public submitPayment() {
    switch (this.type) {
      case PaymentTypes.ThirdParty: {
        const amount = this.total;
        const id = +this.id;
        const payment = new OtherPayment(id, amount);
        payment.sendPayment();
        break;
      }

      case PaymentTypes.Standard: {
        const id = this.id.toString();
        const payment = new Payment(id, this.total);
        payment.submitPayment();
        break;
      }

      default: {
        throw new Error('Invalid Payment Type');
      }
    }
  }
}

const payment: IPayment = new PaymentAdapter(
  '123123123',
  37.5,
  PaymentTypes.Standard
);

const payment2: IPayment = new PaymentAdapter(
  '512312',
  99.99,
  PaymentTypes.ThirdParty
);

payment.submitPayment();
payment2.submitPayment();
