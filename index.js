// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
    return [array[0], array[1]]
}

const returnLastTwoDrivers = function(array) {
    return [array.slice(-2)[0], array.slice(-1)[0]]
}

const selectingDrivers = [
    returnFirstTwoDrivers, returnLastTwoDrivers
]

function createFareMultiplier(inte) {
    return function(inte) {
        return inte * inte
    }
}

function fareDoubler(inte) {
    const fareMultiplier = createFareMultiplier(inte);
     return inte * 2
}

function fareTripler(inte) {
    const faretri = createFareMultiplier(inte);
     return inte * 3
}

function selectDifferentDrivers(arg1, arg2) {
    
}