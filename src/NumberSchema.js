class NumberSchema {
  constructor() {
    this.isEven = false;
    this.isOdd = false;
  }

  isValid(data) {
    if (typeof data !== 'number') {
      return false;
    }
    if (this.isEven && data % 2 !== 0) {
      return false;
    }
    if (this.isOdd && data % 2 === 0) {
      return false;
    }
    return true;
  }

  even() {
    this.isEven = true;
    return this;
  }

  odd() {
    this.isOdd = true;
    return this;
  }
}

export default NumberSchema;
