const removeFromArray = function(array, ...args) {

    let newArr = [];
    array.forEach(element => {
        if (!args.includes(element)) {
            newArr.push(element);
        }
        
    });
    return newArr;
}


// console.log(removeFromArray([1, 2, 3, 4], 2,3))
// Do not edit below this line
module.exports = removeFromArray;