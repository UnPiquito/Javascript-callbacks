/**
 * Define 'onSuccess' function and signature
 * It receives an email as string and returns a string
 *
 * input:
 *  - email: string
 *
 * output:
 *  - string: User with email {email} has been correctly created
 */

/**
 *
 * @param {*} email
 * @returns string
 */

const onSuccess = (email) => {
  const successString = `User with email ${email} has been correctly created`;
  return successString;
};

export default onSuccess;
