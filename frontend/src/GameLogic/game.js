// Runs every 100ms to update the game
export default function game(
  rate,
  generators,
  generatorMult,
  globalMult,
  handleCurrencyChange,
  setRatePerSecond,
) {
    let sum = 0;
    generators.forEach((generator) => {
      sum += generator.baseValue * generator.count;
    });
    sum = sum * generatorMult * globalMult;
    console.log(sum);
    setRatePerSecond(sum);
    handleCurrencyChange(sum * rate);
    return sum;
}
