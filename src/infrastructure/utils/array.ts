export const $add = <T>(arr: T[], val: T): T[] => {
  return [...arr, val];
};

export const $delete = <T>(array: T[], index: number): T[] => {
  return [...array.slice(0, index), ...array.slice(index + 1)];
};

export const $update = <T>(array: T[], index: number, cb: (a: T) => T) => {
  const data = array[index];

  if (data) {
    const newData = cb(data);
    return [...array.slice(0, index), newData, ...array.slice(index + 1)];
  }

  return array;
};
