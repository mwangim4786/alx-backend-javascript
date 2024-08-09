export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (!this.evacuationWarningMessage) {
        throw Error('Class extending Building must override evacuationWarningMessage');
      }
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new Error('amount must be a number');
    }
    this._sqft = value;
  }
}
