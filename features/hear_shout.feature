Feature: Hear shout

  Shouty allows users to "hear" other users "shouts" as long as they are close enough to each other.

  Rule: Shouts should only be heard if listener is within range

    Scenario: Listener is within range
      Given the range is 100
      And people are located at 
        | name | location |
        | Sean | 0        |
        | Lucy | 50       |
      When Sean shouts "free bagels at Sean's"
      Then Lucy should hear Sean's message

    Scenario: Listener is out of range
      Given the range is 100
      And people are located at
        | name | location |
        | Sean | 0        |
        | Lucy | 50       |	
      When Sean shouts "free bagels at Sean's"
      Then Larry should not hear Sean's message

   Rule: Listener should be able to hear multiple shouts

     Scenario: Two shouts
       Given a person named Sean
       And a person named Lucy
       When Sean shouts "Free bagels!"
       And Sean shouts "Free toast!"
       Then Lucy hears the following messages:
         | Free bagels!  |
         | Free toast!   |
