const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Welcome to my server")
});


app.post("/", (req, res) => (
    res.status(201).send("Your data has been saved")
));


app.put("/", (req, res) => {
    res.status(200).send("Data has been placed successfully")
});


app.patch("/", (req, res) => {
    res.status(200).send("Data has been patched successfully")
});

app.delete("/", (req, res) => {
    res.status(200).send("Data has been delete successfully")
})

app.listen(4000, (err) => {
  console.log("Starting sever on", 4000);
});
