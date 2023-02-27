var express = require("express");
var mulesoftApiMock = require("./controllers/mulesoft-api-mock");

var app = express();

app.get("/url", (req, res) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

app.get("/GetOrders", async (req, res) => {   
    let results = await mulesoftApiMock.mulesoftGetOrders(req);

    res.set(results.headers)
    res.type('json')
    res.statusCode = results.status;
    res.send(results.data);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});



