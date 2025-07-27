
const mongoose = require ('mongoose');

const productSchema= new mongoose.Schema({
     nameproduct : {type:"String" , required : true},
     category : {type:"String" , required : true},
     price :{type:Number , required : true },
     discount: {type:Number , required : true},
     image : {type:"String" , required : true },
     amount : {type:Number , required : true},

} , {timestamps:true});

const productmodel = mongoose.model('product' , productSchema);
module.exports = productmodel;
