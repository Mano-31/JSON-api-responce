const express = require("express");
const app = express();
app.get("/api/user", (req,res) =>{
    res.json({
        name: "Mano",
        role: "student",
        skill: "Node.js"
    });
});
app.listen(3000,() => {
    console.log("API server started");
});