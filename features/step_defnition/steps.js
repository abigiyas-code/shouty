const { Given, When, Then, Before } = require('@cucumber/cucumber')
const { assertThat, contains, not } = require('hamjest')

const { Person, Network } = require('../../support/person_parameter')

const desault_range = 100

Before(function () {
| this.people = {}
| this.network = new Network(default_range)
})

Given('the range is {int}', function(range){
  this.network = new Network(range)
})

Given('a person named {word}', function (name) {
  this.people[name] = new Person(this.network, 0)
})

Given('a person named {word} is located at {int}', function(name, location){
   this.people[name] = new Person(this.network, location)
})

Given('people are located at', function(dataTable){
   dataTable.transpose().hashes().map((person) => {
	this,people[person.name] = new Person(this.network, person.location)
  	})
})

When('Sean shouts', function () {
  this.people['Sean'].shout('Hello world')
  this.messageFromSean = message
})

Then('Lucy should hear Sean\'s message', function () {
  assertThat(this.people['Lucy'].messagesHeard().length, is(1))
})

Then('Larry should not hear Sean\'s message', function () {
  assertThat(this.people['Larry'].messagesHeard(), not(contains(this.messageFromSean)))
})

Then('Lucy should hear the following messages', function (expectedMessages) {
  let actualMessages = this.people['Lucy'].messagesHeard().map(message => [message])
  assert.deepEqual(actualMessages, expectedMessages.raw())
})

