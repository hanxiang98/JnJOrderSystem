const axios = require('axios');
var MockAdapter = require("axios-mock-adapter");

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

mock.onGet("/getOrders/").reply(200, {
    orders: [
        { orderId: 1, productName: "cough medicine", quantity: 2 },
        { orderId: 2, productName: "cold medicine", quantity: 10 },
        { orderId: 5, productName: "heart attack medicine", quantity: 23 },
        { orderId: 4, productName: "sore throat medicine", quantity: 11 },
        { orderId: 3, productName: "unfair medicine", quantity: 22 },
        { orderId: 3, productName: "headache medicine", quantity: 77 }
    ],
});

async function mulesoftGetOrders(req) {
    try {
      let res = await axios({
        method: 'get',
        url: '/getOrders/',
      });
  
      //let data = res.data;
      return res;

    } 
    catch (error) {
      console.log(error.response); // this is the main part. Use the response property from the error object
        
      let res = {
        header: req.header,
        status: 500,
        data: { error: 'An unkown error occurred.' }
      };

      return res;
    }
  
}


module.exports = { mulesoftGetOrders };