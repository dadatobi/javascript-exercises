const removeFromArray = function(...arrs) {
    const array = arrs[0];
    const newArray = [];
    array.forEach(item => {
        if(!arrs.includes(item)){
            newArray.push(item);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
