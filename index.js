const LOCOMOTIVE = '<HHHH' 
const PASSENGER_CAR = '|OOOO|'
const RESTAURANT_CAR = '|hThT|'

module.exports = function exoTrain (input = '') {
    return input
        .split('')
        .map(character => {
            if (character === 'H') return LOCOMOTIVE
            if (character === 'P') return PASSENGER_CAR
            if (character === 'R') return RESTAURANT_CAR
        })
        .join('::')
}