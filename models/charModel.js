const mongoose = require('mongoose')

const charSchema = mongoose.Schema(
  {
    character: String
  },
  {
    actor: String
  },
  {
    aka: String,
  },
  {
    born: Date,
  },
  {
    img: String,
  },
  {
    occupation: String,
  }
)

module.exports = mongoose.model('Character', charSchema)