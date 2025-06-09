//Decleare function
function estimateTransactionFee(amountToSend) {
  let transactionFee = amountToSend * 0.015;
  if (transactionFee < 10) {
    transactionFee = 10;
  } else if (transactionFee > 70) {
    transactionFee = 70;
  }
  const totalDebited = amountToSend + transactionFee;

  //log
  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${transactionFee}`);
  console.log(`Total amount to be debited: KES ${totalDebited}`);
  console.log(`Send money securely!`);
}
//prompt
const money = Number(prompt(`Helllo! How much will you be sending today?`));
estimateTransactionFee(money);
