const palindromes = function (s) {
    let string = s.toLowerCase().replace(/[^a-z]/g, "");
    let p1 = 0;
    let p2 = string.length -1;

    while (p1 < p2) {
        if (string[p1] !== string[p2]) {
            return false;
        }
        p1++;
        p2--;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
