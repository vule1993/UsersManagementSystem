
import mongoose from "mongoose";

/**
 * @description create mongoDB schema 
 */
 const Schema = mongoose.Schema;

 const userSchema = new Schema({
     name: {
         type: String,
         required: true,
     },
     email: {
         type: String, 
         required: true,
         unique: true,
     }, 
     phone_number: {
         type: String,
         required: true,
         unique: true
     },
     status: {
         type: String,
         required: true,
     }
 });
 
 //assign schema to model use mongoose.model
 const Userdb = mongoose.model('userdb', userSchema);
 
 export default Userdb

 
 
 
 
 
 
 