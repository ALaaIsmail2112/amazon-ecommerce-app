
const mongoose = require('mongoose')

const Userschema= new mongoose.Schema({
     username : {type:"String", required :true },
     email :  {type:"String", required :true },
     password1 : {type:"String", required :true },
     password2:{type:"String", required :true },
     image : {type:"String", required :true },
    
})
const UserModel = mongoose.model('user' , Userschema)
module.exports = UserModel