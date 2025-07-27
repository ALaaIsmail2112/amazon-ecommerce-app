const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
     userOrDesigner: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          refPath: "role",
      },
      product : { type: mongoose.Schema.Types.ObjectId, ref: "product" },
      quantity: Number,
      phone : String,
      address : String

} , {timestamps:true})

const ordermodel = mongoose.model('order' ,orderSchema )
module.exports = ordermodel