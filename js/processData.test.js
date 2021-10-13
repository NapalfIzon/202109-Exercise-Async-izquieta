import processDataFunctions from "./processData.js";

const { getUserId, getUserDataById, getFinesByDNI } = processDataFunctions;

describe("Give a getUserId function", () => {
  describe("When it recives an username 'marta'", () => {
    test("Then it shoul return an id 13", () => {
      const username = "marta";
      const expectedId = 13;

      const promiseId = getUserId(username);

      return expect(promiseId).resolves.toBe(expectedId);
    });
  });
  describe("When it recives an username 'luis'", () => {
    test("Then it shoul reject with a message `I'm sick of you!`", () => {
      const username = "Luis";

      const promiseId = getUserId(username);

      return expect(promiseId).rejects.toThrow("I'm sick of you!");
    });
  });
});

/*describe("Given a getUserID function", () => {
  describe("when it receives a username 'Marta' ", () => {
    test("it should return an id = 13", () => {
      const userName = "marta";
      const expectedId = 13;

      const promiseId = getUserId(userName);

      return expect(promiseId).resolves.toBe(expectedId);
    });
  });
  describe("when it receives a username 'luis' ", () => {
    test("it should reject with a message 'I'm sick of you'", () => {
      const userName = "luis";
      const expectedMessage = "I'm sick of you!";

      const promiseId = getUserId(userName);

      return expect(promiseId).rejects.toThrow(expectedMessage);
    });
  });
});
describe("Given a getUserDataById", () => {
  describe("when it receives an id = 30", () => {
    test("Then it should return an object with a DNI '4815162342L'", () => {
      const id = 30;
      const expectedDni = "4815162342L";

      const promiseUserData = getUserDataById(id);

      return expect(promiseUserData).resolve.dni.toBe(expectedDni);
    });
  });

  describe("when it receives an id = 100", () => {
    test("Then it should reject with a message 'Luis, don't cheat on me!'", () => {
      const id = 100;

      const promiseUserData = getUserDataById(id);

      return expect(promiseUserData).rejects.toThrow(
        "Luis, don't cheat on me!"
      );
    });
  });
});
*/
