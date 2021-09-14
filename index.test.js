const test = require('ava')
const Train = require('.')
// const trainToASCII = require('.')

test('empty input', t => {
    const train = new Train('')
    t.is(train.toString(), '')
})

test('input locomotive, "H"', t => {
    const train = new Train('H')
    t.is(train.toString(), '<HHHH')
})

test('input locomotive and passenger car, "HP"', t => {
    const train = new Train('HP')
    t.is(train.toString(), '<HHHH::|OOOO|')
})

test('input locomotive and two passenger cars, "HPP"', t => {
    const train = new Train('HPP')
    t.is(train.toString(), '<HHHH::|OOOO|::|OOOO|')
})

test('locomotive at the end, "HPRPH"', t => {
    const train = new Train('HPRPH')
    t.is(train.toString(), '<HHHH::|OOOO|::|hThT|::|OOOO|::HHHH>')
})

test('detach head and tail of train, "HPRPH" -> "HPRP"', t => {
    const train = new Train('HPRPH')
    train.detachEnd()
    t.is(train.toString(), '<HHHH::|OOOO|::|hThT|::|OOOO|')
    train.detachHead()
    t.is(train.toString(), '|OOOO|::|hThT|::|OOOO|')
})