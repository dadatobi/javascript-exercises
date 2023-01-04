const repeatString = function(str, num) {
    if (num > 0) {
        return str.repeat(num);
    } else if (num === 0){
        return ""
    } else if (num < 0) {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = repeatString;
