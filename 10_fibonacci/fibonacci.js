const fibonacci = function(number) {
    if (number < 0) {
        return 'OOPS';
    }
    
    let array = [];
    for (let i = 0; i < number; i++) {
        if (array.length == 0 || array.length == 1) {
            array.push(1);
        } else {
            let sum = array[array.length - 2] + array[array.length - 1];
            array.push(sum);
        }
    }

    return array[array.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
