
const mongoose = require('mongoose')

const  prowithdesignerSchema= new mongoose.Schema({
     designer:  {type :mongoose.Schema.Types.ObjectId , ref :"designer"},
     product :  {type :mongoose.Schema.Types.ObjectId , ref :"product"},

})

const prowithdesignerModel = mongoose.model('prowithdesigner' , prowithdesignerSchema)
module.exports= prowithdesignerModel