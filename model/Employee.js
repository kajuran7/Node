const mongoose = require('mongoose');
// The Mongoose library for MongoDB, making it available for use in the current Node.js application.
const dataSchema = new mongoose.Schema({
    Eployeename: {
        required: true,
        type: String
    },
    Department:{required: true,
    type: String
},
    Destination:{
    required: true,
    type: String

},
    Salary: {
        required: true,
        type: Number
    }
})
// This Mongoose schema defines a data structure with two fields: 
// 'name' of type String and 'age' of type Number. Both fields are marked as required,
//  meaning they must be present in documents using this schema.
 
module.exports = mongoose.model('EmployeeData', dataSchema)
//  Mongoose model named 'Data,' which is based on the 'EployeedataSchema' schema, 
// making it available for use in other parts of the application.