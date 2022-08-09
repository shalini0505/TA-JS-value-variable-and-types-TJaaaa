/*
🎖 Write a program to calculate the total price of your phone purchase. With these conditions
 * [ ] You will keep purchasing phones (hint: loop!) until you run out of bank balance.
 * [ ] You'll also buy accessories for each phone as long as your purchase amount is below your spending threshold.
 * [ ] After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted like ($334.76).
 * [ ] Finally, check the amount against your bank account balance to see if you can afford it or not.
*/

const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;
// your code goes here

// ⛑ Answer of the above will `$334.76`.


var bank_balance = 303.91;
var amount = 0;

while(bank_balance>10){

let str=prompt(`Choose the below option :- \n 1.Mobile\n 2.Accessory\n 3.Both \n \n note :- Above option are case sensetive.`)
let n=prompt(`Enter the quantity`);


if(str=="Mobile"){
   amount=(PHONE_PRICE*n)+TAX_RATE;
  
}
else if(str=="Accessory"){
amount=(ACCESSORY_PRICE*n)+TAX_RATE;
  
}
else if(str=="Both"){
amount=((PHONE_PRICE+ACCESSORY_PRICE)*n)+TAX_RATE;

}
else{
alert(`Choose right option`)}

if(amount<=bank_balance){
if(amount<=SPENDING_THRESHOLD){
bank_balance=bank_balance-amount;
alert(`${str} Quantity :- ${n}   Final Amount with $0.08 Tax :- $${amount}\n\nYour Remaining Bank Balance$${bank_balance.toFixed(2)}`);

amount=0;
}
else{
alert(`You are passing Thresold limit`)}

}}
alert(`you are out of Bank Balance`);