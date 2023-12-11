import createUser from "./createUser.js";
import onError from "./callbacks/onError.js";
import onSuccess from "./callbacks/onSuccess.js";

describe("Given function createUser", () => {
  describe("When function is called with an empty string", () => {
    test("Then the onError string should be returned", () => {
      // Arrange
      const email = "";
      // Act
      const result = createUser(email, onError, onSuccess);
      // Assert
      expect(result).toBe("Error: user not created");
    });
  });

  describe("When function is called with a non empty string", () => {
    test("Then the onSucces string should be returned", () => {
      // Arrange
      const email = "manzana@gmail.com";
      // Act
      const result = createUser(email, onError, onSuccess);
      // Assert
      expect(result).toBe(
        `User with email ${email} has been correctly created`,
      );
    });
  });
});
