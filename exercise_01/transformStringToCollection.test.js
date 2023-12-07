import transformStringToArray from "./transformStringToCollection.js";
import onError from "./callbacks/onError.js";
import onSuccess from "./callbacks/onSuccess.js";

describe("Given function transformStringToArray", () => {
  describe("When function is called with a value as number", () => {
    test("Then an empty array should be returned", () => {
      // Arrange
      const value = 42;
      // Act
      const result = transformStringToArray(value, onError, onSuccess);
      // Assert
      expect(result).toBe([]);
    });
  });

  describe("When function is called with a value as array", () => {
    test("Then an empty array should be returned", () => {
      // Arrange
      const value = [6, 7];
      // Act
      const result = transformStringToArray(value, onError, onSuccess);
      // Assert
      expect(result).toBe([]);
    });
  });

  describe("When function is called with a value as boolean", () => {
    test("Then an empty array should be returned", () => {
      // Arrange
      const value = true;
      // Act
      const result = transformStringToArray(value, onError, onSuccess);
      // Assert
      expect(result).toBe([]);
    });
  });

  describe("When function is called with a value as empty string", () => {
    test("Then an empty array should be returned", () => {
      // Arrange
      const value = "";
      // Act
      const result = transformStringToArray(value, onError, onSuccess);
      // Assert
      expect(result).toBe([]);
    });
  });

  describe("When function is called with a value as string", () => {
    test("Then an array with the string content should be returned", () => {
      // Arrange
      const value = "arroz con avecrem";
      // Act
      const result = transformStringToArray(value, onError, onSuccess);
      // Assert
      expect(result).toBe([arroz, con, avecrem]);
    });
  });
});
