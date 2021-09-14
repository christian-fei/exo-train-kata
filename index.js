const LOCOMOTIVE = '<HHHH' 
const REVERSED_LOCOMOTIVE = 'HHHH>' 
const PASSENGER_CAR = '|OOOO|'
const RESTAURANT_CAR = '|hThT|'
const REPRESENTATIONS = {
    H: REVERSED_LOCOMOTIVE,
    P: PASSENGER_CAR,
    R: RESTAURANT_CAR
}

module.exports = function trainToASCII (train = '') {
    return train
        .split('')
        .map((car, index) => {
            const isHead = (index === 0)
            if (car === 'H' && isHead) return LOCOMOTIVE
            return REPRESENTATIONS[car]
        })
        .join('::')
}