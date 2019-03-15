$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Application feature",
  "description": "",
  "id": "login-application-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Scenario: User Login Scenario"
    },
    {
      "line": 4,
      "value": "#      Given User is on Application Home Page"
    },
    {
      "line": 5,
      "value": "#      When Title of page is FREE CRM"
    },
    {
      "line": 6,
      "value": "#      #Then user enters username and password"
    },
    {
      "line": 7,
      "value": "#      Then user enters \"partheshjoshi\" and \"vaspas9306\" #datadriven from feature file"
    },
    {
      "line": 8,
      "value": "#      And user clicks on Login Button"
    },
    {
      "line": 9,
      "value": "#      When user navigate to User Profile page"
    },
    {
      "line": 11,
      "value": "#Scenario: Verify Duplicate Registration"
    },
    {
      "line": 12,
      "value": "#Given User is on Application Home Page"
    },
    {
      "line": 13,
      "value": "#Then User Clicks on Sign Up button"
    },
    {
      "line": 14,
      "value": "#Then User fills the signup button"
    },
    {
      "line": 15,
      "value": "#And User Clicks the Submit button"
    },
    {
      "line": 16,
      "value": "#Then Display already registered message"
    },
    {
      "line": 17,
      "value": "#Then Navigate to reset password page"
    },
    {
      "line": 19,
      "value": "#\u003d\u003d\u003d\u003d\u003d\u003dScenario Outline is used rather than Scenario when Examples is used"
    }
  ],
  "line": 20,
  "name": "User Login Scenario",
  "description": "",
  "id": "login-application-feature;user-login-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "User is on Application Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "Title of page is FREE CRM",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 23,
      "value": "#Then user enters username and password"
    }
  ],
  "line": 24,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user navigate to User Profile page",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "login-application-feature;user-login-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 30,
      "id": "login-application-feature;user-login-scenario;;1"
    },
    {
      "cells": [
        "partheshjoshi",
        "vaspas9306"
      ],
      "line": 31,
      "id": "login-application-feature;user-login-scenario;;2"
    },
    {
      "cells": [
        "tomhank",
        "abc123"
      ],
      "line": 32,
      "id": "login-application-feature;user-login-scenario;;3"
    },
    {
      "cells": [
        "abhinavnimkar",
        "abc123"
      ],
      "line": 33,
      "id": "login-application-feature;user-login-scenario;;4"
    },
    {
      "cells": [
        "ajeetmaurya",
        "abc123"
      ],
      "line": 34,
      "id": "login-application-feature;user-login-scenario;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 31,
  "name": "User Login Scenario",
  "description": "",
  "id": "login-application-feature;user-login-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "User is on Application Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "Title of page is FREE CRM",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 23,
      "value": "#Then user enters username and password"
    }
  ],
  "line": 24,
  "name": "user enters \"partheshjoshi\" and \"vaspas9306\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user navigate to User Profile page",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_Application_Home_Page()"
});
formatter.result({
  "duration": 37629365023,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.title_of_page_is_FREE_CRM()"
});
formatter.result({
  "duration": 32541707,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[#1 Free CRM software in the cloud for sales and service]\u003e but was:\u003c[www.freecrm.com]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat StepDefinitions.LoginSteps.title_of_page_is_FREE_CRM(LoginSteps.java:35)\r\n\tat ✽.When Title of page is FREE CRM(src/main/java/Features/Login.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "partheshjoshi",
      "offset": 13
    },
    {
      "val": "vaspas9306",
      "offset": 33
    }
  ],
  "location": "LoginSteps.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_navigate_to_User_Profile_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 32,
  "name": "User Login Scenario",
  "description": "",
  "id": "login-application-feature;user-login-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "User is on Application Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "Title of page is FREE CRM",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 23,
      "value": "#Then user enters username and password"
    }
  ],
  "line": 24,
  "name": "user enters \"tomhank\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user navigate to User Profile page",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_Application_Home_Page()"
});
formatter.result({
  "duration": 32650319375,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.title_of_page_is_FREE_CRM()"
});
formatter.result({
  "duration": 6501670,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[#1 Free CRM software in the cloud for sales and service]\u003e but was:\u003c[www.freecrm.com]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat StepDefinitions.LoginSteps.title_of_page_is_FREE_CRM(LoginSteps.java:35)\r\n\tat ✽.When Title of page is FREE CRM(src/main/java/Features/Login.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "tomhank",
      "offset": 13
    },
    {
      "val": "abc123",
      "offset": 27
    }
  ],
  "location": "LoginSteps.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_navigate_to_User_Profile_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 33,
  "name": "User Login Scenario",
  "description": "",
  "id": "login-application-feature;user-login-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "User is on Application Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "Title of page is FREE CRM",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 23,
      "value": "#Then user enters username and password"
    }
  ],
  "line": 24,
  "name": "user enters \"abhinavnimkar\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user navigate to User Profile page",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_Application_Home_Page()"
});
formatter.result({
  "duration": 32634242558,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.title_of_page_is_FREE_CRM()"
});
formatter.result({
  "duration": 7944276,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[#1 Free CRM software in the cloud for sales and service]\u003e but was:\u003c[www.freecrm.com]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat StepDefinitions.LoginSteps.title_of_page_is_FREE_CRM(LoginSteps.java:35)\r\n\tat ✽.When Title of page is FREE CRM(src/main/java/Features/Login.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "abhinavnimkar",
      "offset": 13
    },
    {
      "val": "abc123",
      "offset": 33
    }
  ],
  "location": "LoginSteps.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_navigate_to_User_Profile_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 34,
  "name": "User Login Scenario",
  "description": "",
  "id": "login-application-feature;user-login-scenario;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "User is on Application Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "Title of page is FREE CRM",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 23,
      "value": "#Then user enters username and password"
    }
  ],
  "line": 24,
  "name": "user enters \"ajeetmaurya\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user navigate to User Profile page",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_Application_Home_Page()"
});
formatter.result({
  "duration": 23667420256,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027FTDT798\u0027, ip: \u002710.91.105.162\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab), userDataDir\u003dC:\\Users\\PARTHE~1.JOS\\AppData\\Local\\Temp\\scoped_dir1320_16713}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d71.0.3578.98, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 92abda9e859630360bb8625057a66e8e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:370)\r\n\tat StepDefinitions.LoginSteps.user_is_on_Application_Home_Page(LoginSteps.java:24)\r\n\tat ✽.Given User is on Application Home Page(src/main/java/Features/Login.feature:21)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.title_of_page_is_FREE_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ajeetmaurya",
      "offset": 13
    },
    {
      "val": "abc123",
      "offset": 31
    }
  ],
  "location": "LoginSteps.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_navigate_to_User_Profile_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});