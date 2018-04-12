// Write your solution in this file!

const driver = {};

function updateDriverWithKeyAndValue(object, key, value) {
  const newObj = { ...object };
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}