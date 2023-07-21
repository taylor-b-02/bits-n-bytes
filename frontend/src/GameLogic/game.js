// Runs every 100ms to update the game
export default function game(
  rate,
  generators,
  generatorMult,
  globalMult,
  handleCurrencyChange
) {
  setInterval(() => {
    let sum = 0;
    generators.forEach((generator) => {
      sum += generator.baseValue * generator.count;
    });
    handleCurrencyChange(sum * generatorMult * globalMult);
  }, rate*10);
}
