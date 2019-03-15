package StepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginSteps {

	WebDriver driver;

	@Given("^User is on Application Home Page$")
	public void user_is_on_Application_Home_Page() {
		System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir") + "\\src\\main\\resources\\Executables\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.freecrm.com");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}

	@When("^Title of page is FREE CRM$")
	public void title_of_page_is_FREE_CRM() {

		String actualTitle = driver.getTitle();
		String expectedTitle = "#1 Free CRM software in the cloud for sales and service";

		Assert.assertEquals(expectedTitle, actualTitle);
	}

	@Then("^user enters \"(.*)\" and \"(.*)\"$") // it will accept anything coming from feature file. Also it will work for both examples and no-examples scenarios 
	public void user_enters_username_and_password(String username, String password) {

		driver.findElement(By.xpath("//input[@name='username']")).sendKeys(username);
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys(password);

	}

	@Then("^user clicks on Login Button$")
	public void user_clicks_on_Login_Button() {

		WebElement loginbtn = driver.findElement(By.xpath("//input[@type='submit' and @value='Login']"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click()", loginbtn);

	}

	@When("^user navigate to User Profile page$")
	public void user_navigate_to_User_Profile_page() {
	
		String actualTitle = driver.getTitle();
		//String expectedTitle = "CRMPRO-Parthesh";
		String expectedTitle = "CRMPRO";

		try
		{
		Assert.assertEquals(expectedTitle, actualTitle);
		}
		catch (Exception e)
		{
			System.out.println(e.getMessage());
		}
		/*finally
		{
		driver.close();
		}*/
		
	}
	
	@Then("^close the browser$")
	public void close_the_browser() {
		driver.close();
	}

	@Then("^User Clicks on Sign Up button$")
	public void user_Clicks_on_Sign_Up_button() {
		// Write code here that turns the phrase above into concrete actions

	}

	@Then("^User fills the signup button$")
	public void user_fills_the_signup_button() {
		// Write code here that turns the phrase above into concrete actions

	}

	@Then("^User Clicks the Submit button$")
	public void user_Clicks_the_Submit_button() {
		// Write code here that turns the phrase above into concrete actions

	}

	@Then("^Display already registered message$")
	public void display_already_registered_message() {
		// Write code here that turns the phrase above into concrete actions

	}

	@Then("^Navigate to reset password page$")
	public void navigate_to_reset_password_page() {
		// Write code here that turns the phrase above into concrete actions

	}

}
