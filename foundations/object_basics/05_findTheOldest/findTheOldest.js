const findTheOldest = function (people) {

    const getAge = function (birth, death) {
        return (!death ? new Date().getFullYear() : death) - birth;
    };

    return people.reduce((oldest, current) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);

        return currentAge > oldestAge ? current : oldest;
    });

};

// Do not edit below this line
module.exports = findTheOldest;
