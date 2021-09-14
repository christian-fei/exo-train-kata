const LOCOMOTIVE = '<HHHH' 
const PASSENGER_CAR = '|OOOO|'

module.exports = function exoTrain (input = '') {
    return input
        .split('')
        .map(character => {
            if (character === 'H') return LOCOMOTIVE
            if (character === 'P') return PASSENGER_CAR
        })
        .join('::')
}