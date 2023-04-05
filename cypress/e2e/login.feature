Feature: Login 

    Background:
        Given User are in the login page

    Scenario: User are able to login using valid credential
        When User enter the valid email 'kutukucing16@gmail.com' and password 'kutukucing123' 
        Then User are successfully login

    Scenario: User cannot login using invalid password
        When User enter the valid email 'kutukucing16@gmail.com'
        But User enter the invalid password 'kutukucing1234567'
        Then User are failed to login