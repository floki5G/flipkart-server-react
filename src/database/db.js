

import mongoose from 'mongoose'
const Connection = async () => {
    
    try {
        const url = `mongodb+srv://root:${process.env.PASS}@flipkart-project.mwxvb.mongodb.net/${process.env.MYFIRST}?retryWrites=true&w=majority`;
        await mongoose.connect(url);
        console.log('MongoDB connected');
    } catch (error){
        console.log("erroe db ")
    } 
} 
export default Connection

 



