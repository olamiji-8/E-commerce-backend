const {mongoose} = require("mongoose")

const dbConnect = ()=>{
  try {
    const conn = mongoose.connect("mongodb+srv://olapelu:3214321@cluster0.wstltxa.mongodb.net/?retryWrites=true&w=majority");
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database error");
  }
}
module.exports = dbConnect;