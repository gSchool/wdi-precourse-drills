function unique_in_order(inputData) {
  "use strict";
  var lastChar = '';
  var charArray = [];
  for (var i = 0; i < inputData.length; i++) {
    if (lastChar !== inputData[i]) {
      lastChar = inputData[i];
      charArray.push(lastChar);
    }
  }
  return charArray;
}

function palindrome(inputString) {
  "use strict";
  inputString = inputString.toLowerCase();
  inputString = inputString.replace(/ /g, '');
  inputString = inputString.replace(/\,/g, '');
  var max = Math.floor(inputString.length / 2);
  for (var i = 0; i < max; i++) {
    if (inputString[i] !== inputString[inputString.length - i - 1]) {
      return false;
    }
  }
  return true;
}

function fixGrammar(input) {
  var sentences = input.split('.');
  var correctedList = [];
  for (var i = 0; i < sentences.length; i++) {
    var sentence = sentences[i].replace(/ i /gi, " I ").trim();
    console.log(sentence);
    correctedList.push(sentence.slice(0, 1).toUpperCase() + sentence.slice(1));
  }
  return correctedList.join('. ').trim();
}

function parseQueryString(qs) {
  if (qs[0] === '?') {
    qs = qs.slice(1);
  }
  var object = new Object();
  if (qs.length > 0) {
    var pairs = qs.split('&');
    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i].split('=');
      object[pair[0]] = pair[1];
    }
  }
  return object;
}

function parseCSV(input) {
  var object = new Object();
  if (input.length > 1) {
    var lines = input.split('\n');
    if (lines.length > 0) {
      var fields = lines[0].trim().split(',');
      if (fields.length > 0) {
        for (var i = 0; i < fields.length; i++) {
          var key = fields[i].trim();
          object[key] = [];
        }
        for (var i = 1; i < lines.length; i++) {
          var data = lines[i].split(',');
          for (var j = 0; j < data.length; j++) {
            var fieldData = data[j].trim();
            var fieldKey = fields[j].trim();
            //console.log(i + "," + j + ":" + fieldKey + '= "' + fieldData + '"');
            if (fieldData[0] === '"' &&
              fieldData[fieldData.length - 1] === '"') {
              var newData = fieldData.slice(1, -1);
              if (object[fieldKey] === undefined) {
                object[fieldKey] = [newData];
              } else {
                object[fieldKey].push(newData);
              }
            } else {
              var newNumberData = +fieldData;
              if (object[fieldKey] === undefined) {
                object[fieldKey] = [newNumberData];
              } else {
                object[fieldKey].push(newNumberData);
              }
            }
          }
        }
      }
    }
  }
  return object;
}

function phoneNumber(input) {
  "use strict";
  var result = input.match(/([0-9]{3}.[0-9]{3}.[0-9]{4})|((\+?(1-))?\([0-9]{3}\)-[0-9]{3}-[0-9]{4})/g);
  return result !== null;
}

function isURL(input) {
  "use strict";
  var result = input.match(/(^http:\/\/|^https:\/\/)?[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+/);
  return result !== null && result[0] === input;
}

var dayOfXmas = "day of Christmas my true love gave to me,";
var endings = ["st", "nd", "rd", "th", "th"];
var days = ["a partridge in a pear tree", "two turtle doves and", "three french hens", "four calling birds", "five golden rings"];

function giftList(n) {
  "use strict";
  var result = '';
  for (var i = n - 1; i >= 0; i--) {
    if (result.length > 0) {
      result += ' ';
    }
    result += days[i];
  }
  return result;
}
function daysOfChristmas(n) {
  "use strict";
  var result = '';
  if (n > 0) {
    for (var i = 0; i < n; i++) {
      if (result.length > 0) {
        result += ' \n ';
      }
      result = `${result}On the ${i + 1}${endings[i]} ${dayOfXmas} ${giftList(i + 1)}`;
    }
  }
  else {
    result = 'I got coal for Christmas';
  }
  return result.trim();
}


/*
console.log(unique_in_order('AAAABBBCCDAABBB'));
console.log(unique_in_order('ABBCcAD'));
console.log(unique_in_order([1, 2, 2, 3, 3]));

console.log(palindrome('A man, a plan, a cameo, Zena, Bird, Mocha, Prowel, a rave, Uganda adna, Guevara, Lew, Orpah, Comdr, Ibanez, OEM, a canal, Panama'));
console.log(fixGrammar('there\'s a million things i haven\'t done. just you wait.'));

console.log(parseQueryString('?first_name=Grace&last_name=Hopper'));
console.log(parseQueryString(''));

console.log(parseCSV(''));
console.log(parseCSV('id, Product, Price, Markup, Quantity'));;
console.log(parseCSV('id, Product, Price, Markup, Quantity\n1, "Red T-Shirt", 10, 20, 5\n2, "Blue T-Shirt", 10, 20, 8\n3, "Green T-Shirt", 10, 15, 15\n4, "Yellow T-Shirt", 10, 20, 3'));

console.log(phoneNumber('555.123.4567'));
console.log(phoneNumber('+1-(800)-555-2468'));
console.log(phoneNumber('12345 -98.7 '));

console.log(isURL("www.example.com")); //true
console.log(isURL("http://example.com")); //true
console.log(isURL("http://www.example.com")); //true
console.log(isURL("http://www.example.co.uk.jp")); //true
console.log(isURL("example.com")); //true
console.log(isURL("example")); //false
console.log(isURL("example.")); //false
console.log(isURL("example . com")); //false
console.log(isURL("http:example.com")); //false
console.log(isURL("http.example.com")); //true
*/
console.log(daysOfChristmas(5));
