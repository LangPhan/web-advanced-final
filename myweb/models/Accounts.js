const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Account = new Schema({
    username:{type:String,maxlength:50},
    password:{type:String,maxlength:50},
    email:{type:String, default:'', maxlength: 255},
    phoneNum:{type: String, maxlength:10},
    fullName:{type: String, maxlength: 100},
    birthday:{type: Date},
    frontImg:{
        data:Buffer,
        contentType:String,
    },
    backImg:{
        data:Buffer,
        contentType:String,
    },
    wallet:{type:String,default:'0'},
    status:{type:Number,default:'1'}
},{
    timestamps:true
})
module.exports = mongoose.model('Account',Account)
    