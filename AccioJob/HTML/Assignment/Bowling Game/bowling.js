const game = (rolls) => {
  let score = 0;
  let rollIndex = 0;
  const frames = {};

  for (let frameIndex = 1; frameIndex <= 10; frameIndex++) {
    //Strike
    if (rolls[rollIndex] === 10) {
      score += 10 + rolls[rollIndex + 1] + rolls[rollIndex + 2];
      frames[frameIndex] = [10, rolls[rollIndex + 1], rolls[rollIndex + 2]];
      rollIndex++;
    } else {
      let frameScore = rolls[rollIndex] + rolls[rollIndex + 1];

      //Spare
      if (frameScore === 10) {
        score += 10 + rolls[rollIndex + 2];
        frames[frameIndex] = [10, rolls[rollIndex + 1], rolls[rollIndex + 2]];
      }

      //Normal
      else {
        score += frameScore;
        frames[frameIndex] = [rolls[rollIndex], rolls[rollIndex + 1]];
      }
      rollIndex += 2;
    }
  }
  return { score, frames };
};

// console.log(game([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));

module.exports = { game };
