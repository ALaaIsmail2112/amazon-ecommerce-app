
const mongoose = require('mongoose')

const DesinerSchema = new mongoose.Schema({
     username : {type:"String", required :true },
     email :  {type:"String", required :true },
     password1 : {type:"String", required :true },
     password2:{type:"String", required :true },
     brief : {type:"String", required :true },
     image : {type:"String", required :true },
     
})

const DesinerSchemaModel = mongoose.model('designer' , DesinerSchema)
module.exports = DesinerSchemaModel;