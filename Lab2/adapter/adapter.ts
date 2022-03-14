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

interface IThirdPartyPayment {
  id: number;
  amount: number;
  sendPayment: Function;
}

class ThirdPartyPayment implements IThirdPartyPayment {
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

enum PaymentType {
  ThirdParty,
  Proprietary,
}

class PaymentAdapter implements IPayment {
  public id: string | number;
  public total: number;
  public type: PaymentType;

  constructor(id: string | number, total: number, type: PaymentType) {
    this.id = id;
    this.type = type;
    this.total = total;
  }

  public submitPayment() {
    switch (this.type) {
      case PaymentType.ThirdParty: {
        const amount = this.total;
        const id = +this.id;
        const payment = new ThirdPartyPayment(id, amount);
        payment.sendPayment();
        break;
      }

      case PaymentType.Proprietary: {
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
  PaymentType.Proprietary
);

const payment2: IPayment = new PaymentAdapter(
  '512312',
  99.99,
  PaymentType.ThirdParty
);

payment.submitPayment();
payment2.submitPayment();
