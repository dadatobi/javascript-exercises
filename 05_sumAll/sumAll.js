const sumAll = function(a, b) {
    sum = 0;
    if (a < 0 || b < 0 || isNaN(a) || isNaN(b) || typeof a ==='string' || typeof b ==='string'){
        return `ERROR`
    }else if (b > a) {
        for (i = a; i <= b; i++) {
            sum = sum + i;
        }
        return sum;
    } else if (a > b) {
        for (i = b; i <= a; i++) {
            sum = sum + i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
