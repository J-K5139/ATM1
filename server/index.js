const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const cors = require("cors");


app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://kartik:kartik@crud-trial.jvbxiwp.mongodb.net/data?retryWrites=true&w=majority", {
    useNewUrlParser: true,
}
);

app.get("/extract", async (req, res) => {
    UserModel.find({},(err,result)=>{
        if(err){
            console.log(err);
        }
        res.send(result);
    })
   

});

app.listen(3006, () => {
    console.log("SERVER RUNS PERFECTLY!");
});