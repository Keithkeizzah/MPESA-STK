const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

// Create Express app
const app = express();
app.use(bodyParser.json());

// Constants for Safaricom API
const consumerKey = "ERkqnycHkHAhBEGSnJLYYZdZVVZZj9GQn75faJS9bqhW25pA";
const consumerSecret = "MHnGXDwv6szWXFjXM0I8ALPQEMvnZACcZHDf1F95kaW6xAvmwrBmlFrv4x2bAVUT";
const shortCode = "174379"; // sandbox shortCode
const passkey = "bfb279f9aa9bdbcf158e97dd71a467cd2b7fa7dbf4f02b0c6e5c481b4b2b8d6a";

// Get Access Token function
const getAccessToken = async () => {
    const url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
    try {
        const encodedCredentials = Buffer.from(consumerKey + ":" + consumerSecret).toString('base64');
        const headers = {
            'Authorization': "Basic " + encodedCredentials,
            'Content-Type': 'application/json'
        };
        const response = await axios.get(url, { headers });
        return response.data.access_token;
    } catch (error) {
        throw new Error('Failed to get access token.');
    }
};

// Send STK Push function
const sendStkPush = async (callbackUrl) => {
    const token = await getAccessToken();
    const date = new Date();
    const timestamp =
        date.getFullYear() +
        ("0" + (date.getMonth() + 1)).slice(-2) +
        ("0" + date.getDate()).slice(-2) +
        ("0" + date.getHours()).slice(-2) +
        ("0" + date.getMinutes()).slice(-2) +
        ("0" + date.getSeconds()).slice(-2);

    const stk_password = Buffer.from(shortCode + passkey + timestamp).toString("base64");
    const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";

    const headers = {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
    };

    const requestBody = {
        "BusinessShortCode": shortCode,
        "Password": stk_password,
        "Timestamp": timestamp,
        "TransactionType": "CustomerPayBillOnline",
        "Amount": "10",
        "PartyA": "254114018035",
        "PartyB": shortCode,
        "PhoneNumber": "254114018035",
        "AccountReference": "account",
        "TransactionDesc": "test",
        "CallBackURL": "https://mpesastk-e28452b2a3a3.herokuapp.com/mpesa/callback" // Callback URL
    };

    try {
        const response = await axios.post(url, requestBody, { headers });
        console.log('STK Push Response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error sending STK Push:', error);
    }
};

// Callback route to handle responses from Safaricom
app.post('/mpesa/callback', (req, res) => {
    console.log('Callback received:', req.body);
    // Handle the Safaricom response here (you can save data to DB, process results, etc.)
    res.status(200).send('Callback received');
});

// Start the server (assuming your cloud provider allows incoming traffic on port 3000)
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on https://mpesastk-e28452b2a3a3.herokuapp.com:${PORT}`);
});

 sendStkPush('https://mpesastk-e28452b2a3a3.herokuapp.com/mpesa/callback'); // For domain name