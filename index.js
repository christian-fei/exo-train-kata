const LOCOMOTIVE = '<HHHH' 
const PASSENGER_CAR = '|OOOO|'
const RESTAURANT_CAR = '|hThT|'
const REPRESENTATIONS = {
    H: LOCOMOTIVE,
    P: PASSENGER_CAR,
    R: RESTAURANT_CAR
}

module.exports = function exoTrain (input = '') {
    return input
        .split('')
        .map(character => REPRESENTATIONS[character])
        .join('::')
}