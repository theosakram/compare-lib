import { compare } from "./nonLib";
import { compareWithLib } from "./withLib";

// you can play around with obj1 or obj2 to test the algorithm

const obj1 = {
  name: "sheet2",
  freeze: "A1",
  styles: [],
  merges: [],
  rows: {},
  validations: [],
};

const obj2 = {
  name: "sheet2",
  freeze: "A1",
  styles: [],
  merges: [],
  rows: {},
  validations: [],
};

const missMatch1 = "This is a string, not an object. This won't work!";
const missMatch2 = 100;
const missMatch3 = {
  name: "sheet2",
  freeze: "A1",
  styles: [],
  merges: [],
  rows: {},
};

// with lib (lodash)
console.log(compareWithLib(obj1, obj2), "----------------------lib");
console.log(compareWithLib(obj1, missMatch1));
console.log(compareWithLib(obj1, missMatch2));
console.log(compareWithLib(obj1, missMatch3));

// without lib
console.log(compare(obj1, obj2), "----------------------no lib");
console.log(compare(obj1, missMatch1));
console.log(compare(obj1, missMatch2));
console.log(compare(obj1, missMatch3));
