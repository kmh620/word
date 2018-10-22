function countWord(list, word) {
  var count = 0;
  list.forEach(function(each) {
    if (word === each) {
      count += 1;
    }
  });

  return count;
};
var sortedArray = [];
var uniqueArray = [];
var countArray = [];
var tempArray = [];

function checkWord(list) {

  for (var i = 0; i < list.length; i++) {
    var number = countWord(list, list[i]);

    if (uniqueArray.indexOf(list[i]) == -1) {
      uniqueArray.push(list[i]);
      console.log("uniqueArray= ", uniqueArray);
      countArray.push(number);
      console.log("countArray = " + countArray);
    }
  }
  return true;
};


function combineAndSort(wordArray, numberArray) {
  for (var i = wordArray.length; i > 0; i--) {
    console.log(numberArray);
    var max = Math.max(...numberArray);
    console.log("max = ", max);
    var index = numberArray.indexOf(max);
    console.log("index = ", index);
    tempArray = [];
    tempArray.push(wordArray[index]);
    tempArray.push(numberArray[index]);
    console.log(tempArray);
    sortedArray.push(tempArray);

    if (wordArray.length > 2) {
      wordArray.splice(index, 1);
      numberArray.splice(index, 1);
    } else {
      debugger;
      wordArray.pop();
      numberArray.pop();
    }

  }
  uniqueArray.forEach(function(each) {
    sortedArray.push([each, 1]);
  })
}


$(function() {

  $("#form").submit(function(event) {
    event.preventDefault();
    sortedArray = [];

    var inputString = $("#bulk-input").val();
    var inputArray = inputString.split(" ");

    checkWord(inputArray);
    combineAndSort(uniqueArray, countArray)

    console.log(uniqueArray);
    console.log(countArray);
    console.log(sortedArray)

  });


});
