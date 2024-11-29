import mongoose from 'mongoose'

const connectDb = async () => {
    try {
        console.log(process.env.MONGODB_URL)
        const connected = await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connected to MongoDB", connected.connection.host)
           
    } catch (error) {
        console.log("MongoDB connection failed", error.message)
        process.exit(1)
    }
}
  
    export default connectDb