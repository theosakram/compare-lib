import { compareArray } from "./compareArray";

export const compareObj = (
  input: Record<string, any>,
  target: Record<string, any>
): boolean => {
  for (const propName in input) {
    if (input.hasOwnProperty(propName) !== target.hasOwnProperty(propName)) {
      return false;
    }

    if (typeof input[propName] !== typeof target[propName]) {
      return false;
    }

    if (Array.isArray(input[propName]) && Array.isArray(input[propName])) {
      if (!compareArray(input[propName], target[propName])) {
        return false;
      }
    }

    if (input[propName] instanceof Object && !Array.isArray(input[propName])) {
      if (!compareObj(input[propName], target[propName])) {
        return false;
      }
    }
  }

  // do the same but with property of target
  for (const propName in target) {
    if (target.hasOwnProperty(propName) !== input.hasOwnProperty(propName)) {
      return false;
    }

    if (typeof target[propName] !== typeof input[propName]) {
      return false;
    }

    if (Array.isArray(target[propName]) && Array.isArray(input[propName])) {
      if (!compareArray(target[propName], input[propName])) {
        return false;
      }
    }

    if (
      target[propName] instanceof Object &&
      !Array.isArray(target[propName])
    ) {
      if (!compareObj(target[propName], input[propName])) {
        return false;
      }
    }
  }

  return true;
};
