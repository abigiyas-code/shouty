const Person = require('../../support/person_parameter')
const { defineParameterType } = require('@cucumber/cucumber')

defineParameterType({
  name: 'person',
  regexp: /Lucy|Sean/,
  transformer: name => new Person(name)
})
