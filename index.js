const LOCOMOTIVE = '<HHHH'
const REVERSED_LOCOMOTIVE = 'HHHH>'
const PASSENGER_CAR = '|OOOO|'
const RESTAURANT_CAR = '|hThT|'
const REPRESENTATIONS = {
    H: REVERSED_LOCOMOTIVE,
    P: PASSENGER_CAR,
    R: RESTAURANT_CAR
}

module.exports = class Train {
    constructor(stringRepresentation = '') {
        this.stringRepresentation = stringRepresentation
    }

    toString() {
        return this.stringRepresentation
            .split('')
            .map((car, index) => {
                const isHead = (index === 0)
                if (car === 'H' && isHead) return LOCOMOTIVE
                return REPRESENTATIONS[car]
            })
            .join('::')

    }

}
