//Declare Function
function calculateBodaFare(distanceInKm) {
  const bodaFare = 50;
  const chargePerKm = 15;
  const totalFare = bodaFare + distanceInKm * chargePerKm;

  //log
  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia pikipiki: KES ${bodaFare}`);
  console.log(`Mpaka Uko: KES ${distanceInKm * chargePerKm}`);
  console.log(`Total inakuja ${totalFare}`);
  console.log(`Keti twende!`);
}
//prompt
const distance = Number(prompt(`Karibu! Unaenda km ngapi leo?`));
calculateBodaFare(distance);