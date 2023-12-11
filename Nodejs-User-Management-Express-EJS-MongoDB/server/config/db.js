const mongoose = require('mongoose');
const connectDB = async()=> {
  try {
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect("mongodb://127.0.0.1:27017/Web-Development",{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Database Connected`);
  } catch (error) {
    console.log(error);
  }
}



module.exports = connectDB;

