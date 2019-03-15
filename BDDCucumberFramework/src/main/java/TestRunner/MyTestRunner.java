package TestRunner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src\\main\\java\\Features\\Login.feature", //the path of the feature files
		glue={"StepDefinitions"}, //the path of the step definition files
		format= {"pretty","html:test-outout", "json:report_json/cucumber.json", "junit:report_xml/cucumber.xml"},// to generate pretty console output and reports in respective folders
        dryRun = false, //[if "true" ==> BEFORE EXECUTION ,it will check mapping between feature file and step definition]
        monochrome = true, //[if "true" ==> it will display console output in readable way]
        strict = true//[if "true" ==> it will check that all steps from feature file must be implemented in step definition file and if no definition found for any one feature than it will show that step as fail]
		)

public class MyTestRunner {

}
