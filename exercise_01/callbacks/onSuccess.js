/**
 * Define 'onSuccess' function and signature
 * It receives a string and returns an array with all words contained in it
 *
 * input:
 *  - value: string
 *
 * output:
 *  - array
 */

/**
 *
 * @param {*} value
 * @returns array
 */

const onSuccess = (value) => {
  const stringArray = value.split(",");
  return stringArray;
};

export default onSuccess;
