
const on = (obj, ...args) => obj.addEventListener(...args);

const off = (obj, ...args) => obj.removeEventListener(...args);

export {
  on,
  off
};
