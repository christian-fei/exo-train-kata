const test = require('ava')
const trainToASCII = require('.')

test('empty input', t => {
    t.is(trainToASCII(''), '')
})

test('input locomotive, "H"', t => {
    t.is(trainToASCII('H'), '<HHHH')
})

test('input locomotive and passenger car, "HP"', t => {
    t.is(trainToASCII('HP'), '<HHHH::|OOOO|')
})

test('input locomotive and two passenger cars, "HPP"', t => {
    t.is(trainToASCII('HPP'), '<HHHH::|OOOO|::|OOOO|')
})

test('locomotive at the end, "HPRPH"', t => {
    t.is(trainToASCII('HPRPH'), '<HHHH::|OOOO|::|hThT|::|OOOO|::HHHH>')
})