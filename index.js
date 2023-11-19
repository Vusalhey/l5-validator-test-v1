import Validator from './src/Validator.js';

export default Validator;
// class PasswordHash {
//     constructor() {
//       this.isAlgoritm = false;
//       this.optionHashList = null;
//     }
  
//     isValid(hash) {
//       if (typeof hash !== 'string') {
//         return false;
//       }
//       const list = ['MD5', 'SHA1', 'SHA256', 'SHA512'];
//       const [hashFirst] = hash.split('_');
//       if (!list.includes(hashFirst)) {
//         return false;
//       }
//       if (this.isAlgoritm && this.optionHashList !== null) {
//         if (hashFirst !== this.optionHashList) {
//           return false;
//         }
//       }
//       return true;
//     }
  
//     setHashAlgorithmConstraint(optionHashList) {
//       this.isAlgoritm = true;
//       this.optionHashList = optionHashList;
//       return this;
//     }
//   }
  
//   export default PasswordHash;

// class HoursWorkedSchema {
//     constructor() {
//       this.setHours = null;
//       this.isRange = false;
//     }
  
//     isValid(data) {
//       if (typeof data !== 'number') {
//         return false;
//       }
//       if (data < 0 || !Number.isInteger(data)) {
//         return false;
//       }
//       if (this.isRange && this.setHours !== null) {
//         const [minV, maxV] = this.setHours;
//         if (!(data > minV && data < maxV)) {
//           return false;
//         }
//       }
//       return true;
//     }
  
//     setHoursRangeConstraint(min, max) {
//       this.setHours = [min, max];
//       this.isRange = true;
//       return this;
//     }
//   }
  
//   export default HoursWorkedSchema;

// class UserSchema {
//     constructor() {
//       this.validations = {};
//     }
  
//     shape(newData) {
//       this.validations = newData;
//       return this;
//     }
  
//     isValid(data) {
//       const dataKeys = Object.keys(data);
//       const schemaKeys = Object.keys(this.validations);
  
//       if (dataKeys.length !== schemaKeys.length) {
//         return false;
//       }
  
//       if (schemaKeys.every((key) => this.validations[key].isValid(data[key]))) {
//         return true;
//       }
//       return false;
//     }
//   }
  
//   export default UserSchema;
  