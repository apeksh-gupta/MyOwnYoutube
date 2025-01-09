// require('dotenv').config({path: './env'})

import dotenv from 'dotenv'

import connectDB from "./db/index.js";

// dotenv ko config bhi karna padta hai isme ek methdod hai jisme path diya jaata hai 
// package.json mein jaake bata do ki yeh ek experimental feature hai 

dotenv.config({
  path: './env'
})

// import express from 'express';
// const app = express();

// ( async () => {
//   try {
//     await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`)
//     app.on("error" , () => {
//       console.log("ERROR" , error)
//       throw error
//     })
//     app.listen(process.env.PORT , ()=> {
//       console.log(`Appp is listening on port ${process.env.PORT}`)
//     })
//   } catch {
//     console.log("ERROR: " , error)
//     throw error
//   }
// })()

connectDB()
.then( ()=> {
  app.listen(process.env.PORT || 8000 , () => {
    console.log(`Server is running at port : ${process.env.PORT}`);
  });
  // app.on("error" , (error) => {
  //   console.log("ERROR: " , error);
  //   throw error
  // })
})
.catch((error)=>{
  console.log("MONGO DB connection failed !!! " , error)
})