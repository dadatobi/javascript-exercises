const fibonacci = function(n) {
    if (n < 0){
        return `OOPS`
    }else {
        const fibArr = [0,1]
    for(i = 1;i <= n-1 ; i++){
        nextSequence = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
        fibArr.push(nextSequence);
    }
    return fibArr[fibArr.length-1];
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
