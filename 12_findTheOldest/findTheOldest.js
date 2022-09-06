const findTheOldest = function(people) {
    const d = new Date();
    const currentYear = d.getFullYear();

    const age = (x) => (x.yearOfDeath || currentYear) - x.yearOfBirth;

    const oldest = people.sort(function (a, b) {
        if (age(a) > age(b)) {
            return -1;
        } else {
            return 1;
        }
    });
    return oldest[0]
}
// Do not edit below this line
module.exports = findTheOldest;
