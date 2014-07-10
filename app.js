var prompt = require('sync-prompt').prompt;


//Bank Loop
var withdraw, deposit;
var withdrawHistory = [];
var depositHistory = [];
var overdraftFee = 50;
var balance = 1000;
var done = false;
var home = prompt('What would you like to do? (w)ithdraw, (d)eposit, or (q)uit? :');

while (!done) {
 if( home === 'w'){
   withdraw = prompt('How much would you like to withdraw?: ');
   withdraw = parseInt(withdraw);
   withdrawHistory.push(withdraw);
   //Subtract from balance
   balance -= withdraw;
 }

 if( home === 'd'){
  deposit = prompt('How much would you like to deposit?: ');
  deposit = parseInt(deposit);
  depositHistory.push(deposit);
  //Add to balance
  balance += deposit;
}
 if( home === 'q'){
  done === true;
  break;
}

if(balance < 0){ balance -= overdraftFee; console.log('You overdrew your posted balance!'); }

 //Display new balance
 console.log(balance);
 //Prompt again
  home = prompt('What would you like to do? (w)ithdraw, (d)eposit, or (q)uit? :');
}

var sumWithdraw = 0;
var sumDeposit = 0;

//Sum of withdraws
for(var i  = 0; i < withdrawHistory.length; i++){
	sumWithdraw  += withdrawHistory[i];
}
for(var k = 0; k < depositHistory.length; k++){
	sumDeposit += depositHistory[k];
}

console.log("You withdrew a total of: $" + sumWithdraw);
console.log("You deposited a total of: $" + sumDeposit);
console.log("Your final balance is $" + balance);

//Sum of desposits





