Here’s a polished and visually appealing version of the README.md with clickable links and a better structure:


---

M-Pesa STK Push Integration

This project demonstrates how to integrate Safaricom’s M-Pesa STK Push API using Node.js and Express. It allows you to initiate payment requests to a mobile number via M-Pesa and handle callback responses for transaction status.


---

🔑 Prerequisites

1. Safaricom Developer Account
Sign up here to access the M-Pesa API.


2. App Registration

Log in to the Safaricom Developer Portal.

Navigate to My Apps and create a new app.

Select the MPesa Sandbox APIs for your app and copy your Consumer Key and Consumer Secret.



3. Callback URL

You need a publicly accessible Callback URL to receive transaction updates.

For testing, you can use a deployment platform like Heroku or expose your local server using ngrok.


Examples:

Deployed URL (Heroku):
https://example.herokuapp.com/mpesa/callback

Localhost (ngrok):
Run ngrok http 3000 and use the generated link:
https://<random_string>.ngrok.io/mpesa/callback





---

🧪 Testing with the Sandbox Environment

For testing purposes, Safaricom provides the following default credentials:

ShortCode: 174379

Passkey: bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919

Phone Number: 254708374149

Amount: Any amount can be used for testing.


Steps to Configure the Project for Testing:

1. Open the config.js file.


2. Replace the placeholder values with the default testing credentials from above.


3. Ensure your Callback URL is set to a public URL (ngrok or a deployed server).




---

🚀 Moving to Production

When transitioning to production, you’ll need to:

1. Obtain Production Credentials:
Contact Safaricom to acquire credentials for your Paybill or Till Number. This requires submitting business-related documents like:

Business license

KRA PIN

Proof of ownership of the Paybill/Till



2. Unique ShortCode and Passkey:
Safaricom will provide a custom ShortCode and Passkey linked to your account.


3. Secure Deployment:
Ensure your application is deployed on a reliable, secure server with HTTPS. The Callback URL must also use HTTPS.



Note: A detailed guide for transitioning to production will be provided in a future update.


---

🛠️ Setting Up the Project

There are two ways to configure the project:

1. Edit the config.js file.


2. Use environment variables.



Configuring config.js

Fill in the following placeholders in the config.js file:

consumerKey

consumerSecret

shortCode

passkey

number

amount

callbackUrl


For example, use the following default testing values in config.js:


---

🌐 How to Get API Secrets from the Safaricom Sandbox

1. Sign In:
Log in to the Safaricom Developer Portal.


2. Create a New App:

Navigate to My Apps and click Create a New App.

Select the MPesa Sandbox APIs to activate the necessary APIs.



3. Copy Credentials:
Once the app is created, you’ll see your Consumer Key and Consumer Secret.


4. Activate STK Push API:
Go to API Settings for your app and activate the M-Pesa Express (STK Push) API.




---

📦 Running the Project

1. Install dependencies:

npm install


2. Run the server:

node index.js


3. Trigger an STK Push request:
Use a tool like Postman or cURL to send a POST request.


4. Check the Callback URL for responses.




---

📘 References

Safaricom Developer Portal

Daraja API Documentation



---

⚠️ Disclaimer

This project is for testing and educational purposes only. Ensure you adhere to Safaricom’s guidelines and policies when transitioning to production.


---

Let me know if you need further customizations!

