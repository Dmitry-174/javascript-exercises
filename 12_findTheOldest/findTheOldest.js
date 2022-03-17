function insertThisYear(person) {
    if (!person.yearOfDeath) {
        person.yearOfDeath = (new Date).getFullYear();
    }
}

const findTheOldest = function (array) {
    const newArray = array.sort((a, b) => {
        insertThisYear(a);
        insertThisYear(b);
        return (b.yearOfDeath - b.yearOfBirth) -
            (a.yearOfDeath - a.yearOfBirth);
    })
    return newArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
