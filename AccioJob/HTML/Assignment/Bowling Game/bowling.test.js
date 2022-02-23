// Unit Testing
// Intgration Testing

const { expect, it } = require("@jest/globals");
const { game } = require("./bowling");

//

describe("Check for all the strike conditons", () => {
  const rolls = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

  it("Should say the total score is 300", () => {
    expect(game(rolls).score).toBe(300);
  });

  const expectedFrames = {};
  for (let i = 1; i <= 10; i++) {
    expectedFrames[i] = [10, 10, 10];
  }
  it("should say the total score is 300", () => {
    expect(game(rolls).frames).toStrictEqual(expectedFrames);
  });
});
