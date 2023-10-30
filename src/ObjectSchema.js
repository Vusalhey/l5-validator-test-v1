/* eslint-disable consistent-return */
class ObjectSchema {
  constructor() {
    this.validators = {};
  }

  isValid(data) {
    const keyData = Object.keys(data);
    const keyVal = Object.keys(this.validators);

    if (keyData.length !== keyVal.length) {
      return false;
    }

    if (!keyVal.every((item) => this.validators[item].isValid(data[item]))) {
      return false;
    }
    return true;
  }

  shape(newVal) {
    this.validators = newVal;
    return this;
  }
}

export default ObjectSchema;
