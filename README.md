---

M-Pesa STK Push Integration

This project demonstrates how to integrate the Safaricom M-Pesa STK Push API using Node.js and Express. It allows sending payment requests to a mobile number via M-Pesa and handling the callback response from Safaricom.


---

Prerequisites

1. Safaricom Developer Account:
Sign up at the Safaricom Developer Portal.


2. App Registration (Sandbox Environment):

Log in to your account on the developer portal.

Navigate to My Apps and create a new app.

Copy the Consumer Key and Consumer Secret from the newly created app.



3. Callback URL:

A Callback URL is required to receive transaction results from Safaricom.

This should be a publicly accessible URL (e.g., a deployed server link).


Example:

For Heroku: https://example.herokuapp.com/mpesa/callback

For Localhost: Use a tool like ngrok to expose your local server:

ngrok http 3000

This will generate a public URL like https://<random_string>.ngrok.io/mpesa/callback.





---

Testing in the Sandbox Environment

For testing purposes, you can use Safaricom's default credentials provided in the sandbox environment:

ShortCode: 174379 (Paybill number)

Passkey: bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919

Phone Number: Use the test phone number 254708374149.


These default values are already pre-configured for sandbox testing in Safaricom's environment.


---

Configuring the Project

Option 1: Update config.js

Edit the config.js file with your credentials and configuration:

// config.js

const config = {
    consumerKey: "", // Your Consumer Key from Safaricom
    consumerSecret: "", // Your Consumer Secret from Safaricom
    shortCode: "174379", // Default ShortCode for testing in the sandbox
    passkey: "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919", // Default Passkey for testing
    number: "254708374149", // Test phone number
    amount: "1", // Transaction amount for testing
    callbackUrl: "" // Your callback URL (must be publicly accessible)
};

module.exports = config;

Option 2: Use Environment Variables

Alternatively, you can set these values as environment variables if you prefer:

export CONSUMER_KEY=your_consumer_key
export CONSUMER_SECRET=your_consumer_secret
export SHORTCODE=174379
export PASSKEY=bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919
export PUSHNUMBER=254708374149
export AMOUNT=1
export CALLBACK_URL=https://your-callback-url.com/mpesa/callback


---

Moving to Production

When transitioning to production, you will need:

1. Production Credentials:
Contact Safaricom to obtain production credentials for your Paybill or Till Number. This requires submitting comprehensive paperwork to Safaricom, such as a business license, KRA PIN, and proof of ownership of the Paybill/Till.


2. Customized ShortCode and Passkey:
You will receive a unique ShortCode and Passkey tied to your Paybill or Till Number.


3. Secure Callback URL:
Deploy your app to a secure server and ensure the Callback URL is publicly accessible via HTTPS.



Production Tutorial

A detailed guide for transitioning to production will be provided soon, covering all required steps and configurations.


---

How to Get Secrets from the Sandbox

1. Log in to the Safaricom Developer Portal:
Visit the Safaricom Developer Portal.


2. Create an App:

Go to My Apps and click "Create a new app."

Select the MPesa Sandbox APIs you want to use.

Once created, your app will display the Consumer Key and Consumer Secret.



3. Enable APIs:

Under the API Settings, activate the M-Pesa Express (STK Push) API for your app.



4. Test with Default Credentials:
Use the default ShortCode, Passkey, and test phone number provided by Safaricom.




---

Running the Project

1. Install dependencies:

npm install


2. Run the application:

node index.js


3. Send a request to trigger the STK Push:

curl -X POST http://localhost:3000/mpesa/push


4. Handle callbacks:
Safaricom will send transaction status updates to your specified callback URL.




---

License

This project is licensed under the MIT License.