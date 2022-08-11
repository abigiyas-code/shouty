const assert = require('assert')
const sinon = require('sinon')
const {Person, Network} = require('../../support/person_parameter')

describe('Person', () => {
	
	let network,message
	beforeEach(()=>{
	   const range = 100
  	   network = new Newtwork(range)
	   const message = "Free bagels!"
})
})
it('broadcast a message to a listener within range', function () {
    const shouterLocation = 0
    const listenerLocation = 90
    const lucy = new Person(network, listenerLocation)
    const lucyStub = sinon.spy(lucy)

    network.subscribe(lucy)
    network.broadcast(Message, shouterLocation)

    assert.strictEqual(lucyStub.hear.getCall(0).args[0], message)
  })

it('does not broadcast a message over 180 characters even if listener is in range', function () {
    const shouterLocation = 0
    const listenerLocation = 90
    const lucy = new Person(network, listenerLocation)
    const lucyStub = sinon.spy(lucy)

    const longMessage = 'x'.repeat(181)

    network.subscribe(lucy)
    network.broadcast(longMessage, shouterLocation)

    assert(lucyStub.hear.notCalled)
  })

