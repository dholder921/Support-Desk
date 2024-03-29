const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    ticket: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    text: {
        type: String,
        required: [true, 'Add some text'],
    },
    isStaff: {
        type: Boolean,
        default: false,
    },
    staffId: {
        type: String,
    },
    
},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('note', noteSchema)