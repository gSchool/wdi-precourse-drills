function parseCSV(input){
    let result = {};

    // get all the lines
    const splitInput = input.split('\n');

    // Get properties from line 1 & put them into an object.
	let headerLine = splitInput[0];
	let splitHeader = headerLine.split(', ');
    for(let key in splitHeader) {
        result[key] = [];
    }


}

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