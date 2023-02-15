const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    repeatPassword:{
        type:String,
        required:true,
    },
    personalInformation:{
        userName:String,
        phoneNumber: {
            type:String,
            unique: true
        },
        addressLine:String,
        city:String,
        country:String,
        postcode:String,
        securityQuestion:{
            type:String,
            unique:true
        },

    },
    token:{
        type:String
    }
})

const tableModel = mongoose.model('serviceReact',tableSchema);
module.exports = tableModel;