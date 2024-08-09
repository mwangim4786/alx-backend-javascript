import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (typeof value !== 'string') {
      throw new Error('Invalid input type');
    }
    this._currency = value;
  }

  set amount(value) {
    if (typeof value !== 'string') {
      throw new Error('Invalid input type');
    }
    this._amount = value;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
