/**
 * Define 'transformStringToArray' function and signature (JSDocs)
 *
 * input:
 *  - value: any
 *  - onError: function
 *  - onSuccess: function
 *
 * If received value is not a string or it is an empty string, then call onError callback
 * Otherwise, call onSuccess function
 *
 * output
 *  - array
 */

/**
 *
 * @param {*} value
 * @param {*} onError
 * @param {*} onSuccess
 * @returns array
 */

const transformStringToArray = (value, onError, onSuccess) => {
  if (value === "" || typeof value !== "string") {
    return onError();
  }
  return onSuccess(value);
};

export default transformStringToArray;
