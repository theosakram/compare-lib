export const isPrimitive = (val: any) => {
  if (typeof val === "object" || typeof val === "function") {
    return false;
  }

  return true;
};
