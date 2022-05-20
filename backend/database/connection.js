/**
 * @description create mongoDB connection
 */

import mongoose from "mongoose";

export default async function connectDB () {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Successfully connect to MangoDb @ ${conn.connection.host}`)
        
    } catch(e) {
        console.error(`Failed to connect to MongoDb error: ${e}`)
        process.exit(1)
    }
}
