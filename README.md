# Compare-Lib

This simple library is for deeply comparing primitives, arrays, and objects. Limited capability

## RUN

```bash
yarn dev
```

## EXAMPLE

```typescript
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

console.log(compare(obj1, obj2)); // true
console.log(compare(obj1, missMatch1)); // false
console.log(compare(obj1, missMatch2)); // false
console.log(compare(obj1, missMatch3)); // false
```
