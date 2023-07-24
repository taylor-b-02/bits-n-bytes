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
    handleCurrencyChange(sum * generatorMult * globalMult);
    sum = sum * rate;
    return sum;
}
