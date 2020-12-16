const mongoose = require('mongoose')

const connectDB = async() => {
    try{
        const connection = await mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true})
        console.log(`MONGO BAZA JE USPOSTAVLJENA - ${connection.connection.host}`)
    }
    catch(error){
        console.error(err)
    }
}

module.exports = connectDB