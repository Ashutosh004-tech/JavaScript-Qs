import  mongoose  from "mongoose";
import  express  from "express";

const app = express();
const port = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/PasswordEncrypt");


app.post("/user/new", async (req,res)=>{
    
})

app.listen(port, () => {
  console.log(`Server Stared for Port : ${port}`);
});
