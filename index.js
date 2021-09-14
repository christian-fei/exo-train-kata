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
    constructor(trainRepresentation = '') {
        this.trainRepresentation = trainRepresentation
    }

    toString() {
        return this.trainRepresentation
            .split('')
            .map((car, index) => {
                const isHead = (index === 0)
                if (car === 'H' && isHead) return LOCOMOTIVE
                return REPRESENTATIONS[car]
            })
            .join('::')

    }

    detachHead () {
        this.trainRepresentation = this.trainRepresentation.substring(1, this.trainRepresentation.length)
    }

    detachEnd () {
        this.trainRepresentation = this.trainRepresentation.substring(0, this.trainRepresentation.length - 1)
    }
}
