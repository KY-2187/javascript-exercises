const repeatString = function(word, number) {
    let repeatedString = '';

    if (number < 0) {
        return 'ERROR';
    } else {
        counter = 0;
        while (counter < number) {
            repeatedString += word;
            counter++;
        }
        return repeatedString;
    }
};

// Do not edit below this line
module.exports = repeatString;
