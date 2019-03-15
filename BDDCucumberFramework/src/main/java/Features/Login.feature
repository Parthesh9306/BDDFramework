Feature: Login Application feature

#Scenario: User Login Scenario
#      Given User is on Application Home Page
#      When Title of page is FREE CRM
#      #Then user enters username and password
#      Then user enters "partheshjoshi" and "vaspas9306" #datadriven from feature file
#      And user clicks on Login Button
#      When user navigate to User Profile page
      
#Scenario: Verify Duplicate Registration
      #Given User is on Application Home Page
      #Then User Clicks on Sign Up button
      #Then User fills the signup button
      #And User Clicks the Submit button
      #Then Display already registered message
      #Then Navigate to reset password page

#======Scenario Outline is used rather than Scenario when Examples is used      
Scenario Outline: User Login Scenario
      Given User is on Application Home Page
      When Title of page is FREE CRM
      #Then user enters username and password
      Then user enters "<username>" and "<password>"
      And user clicks on Login Button
      When user navigate to User Profile page
      Then close the browser
      
Examples:
| username      | password   |
| partheshjoshi | vaspas9306 |
| tomhank       | abc123     |
| abhinavnimkar | abc123     |
| ajeetmaurya   | abc123     |