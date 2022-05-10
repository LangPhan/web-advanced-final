const mongoose = require('mongoose')
async function connect() {
    try{
        await mongoose.connect('mongodb://localhost:27017/Finals',{
        });
        console.log('Good')
    }catch(error){
        console.log('Not good')
        console.log(error)
    }
}

module.exports = {connect}