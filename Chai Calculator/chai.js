//Declare constants
const ChaiRecipe = {
  waterInMl: 200,
  milkInMl: 50,
  tealeavesTbsp: 1,
  sugarTsp: 2,
};
//Define function
function calculateChaiIngredients() {
  //prompt
  const numberOfCups = Number(
    prompt(`Karibu! How Many cups of chai would you like to make?`)
  );
  //Input validation
  if (isNaN(numberOfCups) || numberOfCups <= 0) {
    console.log(`Please enter a valid number of cups`);
    return;
  }
}
