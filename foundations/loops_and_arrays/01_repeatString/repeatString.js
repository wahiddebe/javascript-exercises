const repeatString = function (string, num) {

    if (num >= 0) {
        let repeatString = ''

        for (let index = 0; index < num; index++) {

            repeatString += string

        }
        return repeatString
    }
    else {
        return 'ERROR'
    }

};

// Do not edit below this line
module.exports = repeatString;
