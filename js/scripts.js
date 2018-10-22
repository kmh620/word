function countWord(list, word) {
  var count = 0;
  list.forEach(function(each) {
    if (word === each) {
      count += 1;
    }
  });

  return count;
};


var uniqueArray = [];
var countArray = [];

function checkWord(list) {

  for (var i = 0; i < list.length; i++) {
    var number = countWord(list, list[i]);

    if (uniqueArray.indexOf(list[i]) != -1) {
        // pass
      } else {
        uniqueArray.push(list[i]);
        console.log("uniqueArray= ", uniqueArray);
        countArray.push(number);
        console.log("countArray = " + countArray);
      }
  }
  return true;
};

$(function() {

  $("#form").submit(function(event) {
    event.preventDefault();

    var inputString = $("#bulk-input").val();
    var inputArray = inputString.split(" ");

    checkWord(inputArray);


    console.log(uniqueArray);
    console.log(countArray);

  });


});
