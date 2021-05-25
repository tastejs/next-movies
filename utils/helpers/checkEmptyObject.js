
const checkEmptyObject = targetObject => {
  return Object.keys(targetObject).length === 0 && targetObject.constructor === Object;
};

export default checkEmptyObject;
