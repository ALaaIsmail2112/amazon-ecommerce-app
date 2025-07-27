
const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
     userOrDesigner: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          refPath: "role",
        },
        product : { type: mongoose.Schema.Types.ObjectId, ref: "product" }
})

const cartmodel = mongoose.model('cart' , cartSchema)
module.exports = cartmodel