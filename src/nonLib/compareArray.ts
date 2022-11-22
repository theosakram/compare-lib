// this will recursively compare every element of the array
// array with same element but different order will still be count as equal
export const compareArray = (
  input: Array<any>,
  target: Array<any>
): boolean => {
  if (input.length !== target.length) {
    return false;
  }

  const sortedInput = input.sort();
  const sortedTarget = target.sort();

  for (let i = 0; i < sortedInput.length; i++) {
    // if the element is another array
    if (Array.isArray(sortedInput[i]) && Array.isArray(sortedTarget[i])) {
      return compareArray(sortedInput[i], sortedTarget[i]);
    }

    if (sortedInput[i] !== sortedTarget[i]) {
      return false;
    }
  }

  return true;
};
