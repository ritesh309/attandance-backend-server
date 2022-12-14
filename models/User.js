const mongoose = require( 'mongoose' );

const usersSchema = new mongoose.Schema( {
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: Number,
    org:{ type : String},
    dateOfBirth:{ type : String},
    designation:{ type : String},
    
    currlongitude :String,
    currlatitude :String,
    orgLongitude:String,
    orgLatitude:String,
 password: {
    type: String,
},
confirmPassword: {
    type: String,
},
entry:{
  type: String,
},
exit:{ type:String, },
 verified: Boolean
}, 
{ timestamps: true } );

const User = mongoose.model( 'User', usersSchema );

module.exports = User;