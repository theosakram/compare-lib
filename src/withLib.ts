import isEqual from "lodash.isequal";

// External library version
export const compareWithLib = (input: any, target: any) => {
  return isEqual(input, target);
};
