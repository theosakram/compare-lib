import { compareArray } from "./compareArray";
import { compareObj } from "./compareObj";
import { isPrimitive } from "./isPrimitive";

// compare without lib
// this will only compare primitives, arrays, and objects
// will not compare buffer
export const compare = (input: any, target: any) => {
  if (typeof input !== typeof target) {
    return false;
  }

  // compare primitive
  if (isPrimitive(input) && isPrimitive(target)) {
    return input === target;
  }

  // compare Arrays
  if (Array.isArray(input) && Array.isArray(target)) {
    return compareArray(input, target);
  }

  // compare object
  return compareObj(input, target);
};
