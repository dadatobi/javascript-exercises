const reverseString = function(str) {
    const myArray = str.split("");
    myArray.reverse();
    let newString = myArray.join("");
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
