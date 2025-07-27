
const mongoose = require('mongoose')

const ratingSchema = new mongoose.Schema({
     rate : {type:Number },
     user : {type :mongoose.Schema.Types.ObjectId , ref :"user"},
     Desiner : {type :mongoose.Schema.Types.ObjectId , ref :"user"}
       
})

const ratingModel = mongoose.model('rating' , ratingSchema)
module.exports = ratingModel