export const utils = {
  isEmpty(value: string) {
    return typeof value === "string" && !value.trim().length;
  },
};
