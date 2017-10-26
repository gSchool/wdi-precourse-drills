function parseCSV(input){
  let result = {};

  // get all the lines
  const splitInput = input.split('\n');

  // Split Header items into an array
  let headerLine = splitInput[0];
  let splitHeader = headerLine.split(', ');

  // Split Each Line of CSV Data into an Array
  let csvData = [];
  for (let i = 1; i < splitInput.length; i++) {
    let dataLine = splitInput[i];
    let splitData = dataLine.split(', ');
    csvData.push(splitData);
  }

  // Load headers and Data into Result object
  for (let key in splitHeader) {
    let objData = [];
    for (i = 0; i < csvData.length; i++) {
      objData.push(csvData[i][key]);
    }
    result[splitHeader[key]] = objData;
  }
  return result;
}


let testInput = `id, Product, Price, Markup, Quantity
1, "Red T-Shirt", 10, 20, 5
2, "Blue T-Shirt", 10, 20, 8
3, "Green T-Shirt", 10, 15, 15
4, "Yellow T-Shirt", 10, 20, 3`;

parseCSV(testInput);






// Other Problems //

function simpleEncrypt(str){
    let result = '';

    for (let c in str){
        let point = (str.codePointAt(c) * 2) + 10000;
        result += point;
    }

    return result;
}

function simpleDecrypt(num) {

    let result = '';
    // Split String every fifth character into an array
    let numSplit = num.match(/.{5}|.{1,2}/g);

    for (let c in numSplit) {
        var letter = numSplit[c];
        letter -= 10000;
        letter /= 2;
        letter = String.fromCodePoint(letter);
        result += letter;
    }
    return result;

}


var dayOfXmas = "day of Christmas my true love gave to me,";
var endings = ["st", "nd", "rd", "th", "th"];
var days = ["a partridge in a pear tree", "two turtle doves and", "three french hens", "four calling birds", "five golden rings"];

function daysOfChristmas(n) {
    if (n === 0 || n === undefined) {
        return "I got coal for Christmas";
    }
    var strChristmasSpirit = "";
    for (var i = 0; i < n; i++) {
        strChristmasSpirit += `On the ${i+1}${endings[i]} ${dayOfXmas} `;
        for (var j = i; j >= 0; j--) {
            strChristmasSpirit += `${days[j]} `;
        }
        strChristmasSpirit += `\n`;
    }
    return strChristmasSpirit;
}
