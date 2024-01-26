import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        mongoose.set("strictQuery", false);
        const connected = await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(`MongoDB connected on ${connected.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default dbConnect;


//RBgMwMWlAQeLvFPc

//SrpoA8vQLlvEFNYN main

