
//Get the value of each crypto
var rippleArr = [1, 3, 5, 7],
  eosArr = [2, 4, 6, 8],
  etherArr = [20, 50, 100, 500],
  bitcoinArr = [1000, 2000, 3000, 4000];

var rippleVal, eosVal, etherVal, bicoinVal;
var randomNum;
var targetVal = '';
var totalCryptoVal = 0;
var win = 0;
var lose = 0;
var statusSpan = $("<h2>");

//generate target value initially when game starts and display to the user
for (var i = 0; i < 4; i++) {
  randomNum = [Math.ceil(Math.random() * 5)];
  targetVal = targetVal + randomNum;
  $("#targetValue").text('$' + targetVal);
}
//Display Total Crypto Value user collects
$("#totalCrytoValue").text('$' + totalCryptoVal);

//generate cryto value
  rippleVal = rippleArr[Math.floor(Math.random() * rippleArr.length)];
  eosVal = eosArr[Math.floor(Math.random() * eosArr.length)];
  etherVal = etherArr[Math.floor(Math.random() * etherArr.length)];
  bicoinVal = bitcoinArr[Math.floor(Math.random() * bitcoinArr.length)];

//Update data-value
  $("#ripple").attr("data-value", rippleVal);
  $("#eos").attr("data-value", eosVal);
  $("#ether").attr("data-value", etherVal);
  $("#bitcoin").attr("data-value", bicoinVal);


function resetGame() {
  var newTargetVal = "";
  totalCryptoVal = 0;

  $("#totalCrytoValue").text('$' + totalCryptoVal);

  for (var i = 0; i < 4; i++) {
    randomNum = [Math.ceil(Math.random() * 5)];
    newTargetVal = newTargetVal + randomNum;
    targetVal = newTargetVal;
    $("#targetValue").text('$' + targetVal);
  }

  //randomly pick a new value
  var newRippleVal = rippleArr[Math.floor(Math.random() * rippleArr.length)];
  rippleVal = newRippleVal;
  var newEosVal = eosArr[Math.floor(Math.random() * eosArr.length)];
  eosVal = newEosVal;
  var newEtherVal = etherArr[Math.floor(Math.random() * etherArr.length)];
  etherVal = newEtherVal;
  var newBicoinVal = bitcoinArr[Math.floor(Math.random() * bitcoinArr.length)];
  bicoinVal = newBicoinVal;

  // Update the new data-value
  $("#ripple").attr("data-value", rippleVal);
  $("#eos").attr("data-value", eosVal);
  $("#ether").attr("data-value", etherVal);
  $("#bitcoin").attr("data-value", bicoinVal);
}

function collect() {

  //CSS: Add transformation effect to the crypto on click
  $(this).attr('class', 'collect');
  $(this).on('transitionend', function() {
    $(this).removeClass('collect');
  })

  var val = parseInt($(this).attr('data-value'));

  totalCryptoVal = totalCryptoVal + val;

  //update the total cryto value to the window
  $("#totalCrytoValue").text('$' + totalCryptoVal);

  //you lose
  if (totalCryptoVal > targetVal) {
    statusSpan.text("You Lost!");
    $("#status").prepend(statusSpan);
    lose++;
    $("#lose").text(lose);
    resetGame();
  }

  //you win
  if (totalCryptoVal == targetVal) {
    statusSpan.text("You Won!");
    $("#status").prepend(statusSpan);
    win++;
    $("#win").text(win);
    resetGame();
  }
}

$(document).on('click', 'img', collect);
