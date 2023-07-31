// Runs every 100ms to update the game
export default function game(
  rate,
  generators,
  generatorMult,
  globalMult,
  handleCurrencyChange
) {
    let sum = 0;
    generators.forEach((generator) => {
      sum += generator.baseValue * generator.count;
    });
    sum = sum * rate;
    handleCurrencyChange(sum * generatorMult * globalMult);
    return sum;
}
