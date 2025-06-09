//Define function
function calculateChaiIngredients(numberOfCups) {
  const water = 200 * numberOfCups;
  const milk = 50 * numberOfCups;
  const tealeaves = 1 * numberOfCups;
  const sugar = 2 * numberOfCups;

  //log
  console.log(`To make ${numberOfCups} cups you will need:`);
  console.log(`Water : ${water}ml`);
  console.log(`Milk: ${milk}ml`);
  console.log(`Tea Leaves (majani) : ${tealeaves} tablespoons`);
  console.log(`Sugar(sukari) : ${sugar} teaspoons`);
  console.log("Enjoy your Chai Bora!");
}
//prompt
const input = Number(prompt(`Karibu! How many cups would you like?`));
calculateChaiIngredients(input);
