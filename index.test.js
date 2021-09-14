const test = require('ava')
const exoTrain = require('.')

test('empty input', t => {
    t.is(exoTrain(''), '')
})

test('input locomotive, "H"', t => {
    t.is(exoTrain('H'), '<HHHH')
})

test('input locomotive and passenger car, "HP"', t => {
    t.is(exoTrain('HP'), '<HHHH::|OOOO|')
})

test('input locomotive and two passenger cars, "HPP"', t => {
    t.is(exoTrain('HPP'), '<HHHH::|OOOO|::|OOOO|')
})