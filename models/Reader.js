const mongoose = require('../config/db');

const readerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    membershipStatus: { type: String, enum: ['active', 'inactive'], default: 'active' },
    borrowedBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }]
});

module.exports = mongoose.model('Reader', readerSchema);
