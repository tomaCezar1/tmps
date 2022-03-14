var Payment = /** @class */ (function () {
    function Payment(id, total) {
        this.id = id;
        this.total = total;
    }
    Payment.prototype.submitPayment = function () {
        console.log("Payment Amount ".concat(this.total, " for ").concat(this.id));
    };
    return Payment;
}());
var ThirdPartyPayment = /** @class */ (function () {
    function ThirdPartyPayment(id, amount) {
        this.id = id;
        this.amount = amount;
    }
    ThirdPartyPayment.prototype.sendPayment = function () {
        console.log("3rd Party Payment Amount ".concat(this.amount, " for ").concat(this.id));
    };
    return ThirdPartyPayment;
}());
var PaymentType;
(function (PaymentType) {
    PaymentType[PaymentType["ThirdParty"] = 0] = "ThirdParty";
    PaymentType[PaymentType["Proprietary"] = 1] = "Proprietary";
})(PaymentType || (PaymentType = {}));
var PaymentAdapter = /** @class */ (function () {
    function PaymentAdapter(id, total, type) {
        this.id = id;
        this.type = type;
        this.total = total;
    }
    PaymentAdapter.prototype.submitPayment = function () {
        switch (this.type) {
            case PaymentType.ThirdParty: {
                var amount = this.total;
                var id = +this.id;
                var payment_1 = new ThirdPartyPayment(id, amount);
                payment_1.sendPayment();
                break;
            }
            case PaymentType.Proprietary: {
                var id = this.id.toString();
                var payment_2 = new Payment(id, this.total);
                payment_2.submitPayment();
                break;
            }
            default: {
                throw new Error('Invalid Payment Type');
            }
        }
    };
    return PaymentAdapter;
}());
var payment = new PaymentAdapter('123123123', 37.5, PaymentType.Proprietary);
var payment2 = new PaymentAdapter('512312', 99.99, PaymentType.ThirdParty);
payment.submitPayment();
payment2.submitPayment();
