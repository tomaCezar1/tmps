class Mortgage {
  constructor(name) {
    this.name = name;
  }

  applyFor = function (amount) {
    let result = 'approved';
    if (!new Bank().verifyTransaction(this.name)) {
      result = 'denied';
    } else if (!new Credit().getCreditScore(this.name)) {
      result = 'denied';
    } else if (!new Background().checkBackground(this.name)) {
      result = 'denied';
    }
    return this.name + ' has been ' + result + ' for a ' + amount + ' mortgage';
  };
}

class Bank {
  verifyTransaction = function () {
    console.log('transaction verified');
    return true;
  };
}

class Credit {
  getCreditScore = function (score) {
    console.log('credit score:', score);
  };
}

class Background {
  checkBackground = function (name) {
    console.log(`${name} background check done`);
  };
}

const mortgage = new Mortgage('Applicant 1');
const result = mortgage.applyFor('10000 MDL');

console.log(result);
