import mongoose from "mongoose";

const dbConnect =  async () => {
    try 
    {
        const connected = mongoose.connect(process.env.MONGO_URL);
        mongoose.set("strictQuery",true);
        console.log(`Mongodb connected ${connected.connection.host} `);
    }

    catch(error){
        console.log(`Error : ${Error.message}`);
        process.exit(1);
    }
};

export default dbConnect;

//RBgMwMWlAQeLvFPc

//SrpoA8vQLlvEFNYN main

