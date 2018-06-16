//There are four crypto
//Add four buttons to html
//Each button should have data attribute of value to store the value as it gets updated every game
//Give button an id calls 'crypto'


//Each crypto has four different value every game
//Each crypto should have an array of 4 values rounded to the dollar
// [1, 2, 3, 4]
// [5, 10, 20, 50]
// [100, 200, 300, 400]
// [1000, 2000, 3000, 4000]
//Randomly select any value from the array
//store the sum of it to a variable
//The key value should always be in the range of $1156 to $4454 (the sum of the smallest number to the sum of the largest number in the arrays)


//There is one key value to match from the sum of the 4 crypto's value
//Randomly select the number in each array first
//Add them together
//This is the key value

//Coparing the key value to the total value every click
//on button click, sum up the values and then compare it to the the key values

//Update number of wins if match and lose if sum is higher than the key value
//if the sum of values == to the key value then user winn
//make the win variable global
//update win++
//if sum of values > key value than user lose
//update lose++

//HTML elements to be displayed
//Key value board
//status win/lose board
//4 buttons to represent 4 cryptos
//The total score of the player

//Get the value of each crypto
var rippleArr = [1, 3, 5, 7],
    eosArr = [2, 4, 6, 8],
    etherArr = [100, 200, 300, 400],
    bitcoinArr = [1000, 2000, 3000, 4000];

var rippleVal = rippleArr[Math.floor(Math.random() * rippleArr.length)],
    eosVal = eosArr[Math.floor(Math.random() * eosArr.length)],
    etherVal = etherArr[Math.floor(Math.random() * etherArr.length)],
    bicoinVal = bitcoinArr[Math.floor(Math.random() * bitcoinArr.length)];

//Update data-value
$('#ripple').attr('data-value', rippleVal);
$('#eos').attr('data-value', eosVal);
$('#ether').attr('data-value', etherVal);
$('#bitcoin').attr('data-value', bicoinVal);

//to get the target value
var randomNum;
var targetVal = "";
for (var i = 0; i < 4; i++) {
  randomNum = [Math.ceil(Math.random() * 5)];
  targetVal = targetVal + randomNum;
}
console.log('target', targetVal);

function collect() {
  var button = $(this);
  console.log(button.attr('data-value'));

}

$(".crypto").on('click', collect);