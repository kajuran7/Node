const express = require('express');
// This is Imports the Express.js framework module
// it available for use in a Node.js application.

const router = express.Router()
// This is Instance of an Express.js router
//  which can be used to define and organize routes in a Node.js application.

module.exports = router;
// This line exports the Express.js router instance for use in other parts of a Node.js application.

//POST BY ID METHOD
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })
    // Express.js router POST route for the path '/post',  
    // handling incoming requests by creating a new instance of a model with data extracted from the request body.
   
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

// This block of code attempts to save the data to a database asynchronously, and if successful,
//  responds with a JSON representation of the saved data;
//  otherwise, it responds with a 400 status code and an error message in JSON format.


//UPDATE BY ID METHOD
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
// This Express.js router PATCH route updates a document in the database with the specified ID, 
// using data from the request body, and responds with the updated document 
// or a 400 status code and an error message in JSON format if an error occurs.


// GET ALL METHOD
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
// This Express.js router GET route retrieves all documents from the database using the 'Model' schema
//  and responds with the data in JSON format or
//  a 500 status code and an error message in JSON format if an error occurs.


//GET BY ID 
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
// This Express.js router GET route retrieves a document from the database by its ID,
//  responding with the document's data in JSON format if found,
//  or a 500 status code and an error message in JSON format if an error occurs.


//DELETE BY ID METHOD

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// This Express.js router DELETE route removes a document from the database by its ID, 
// responding with a success message containing the deleted document's name, 
// or a 400 status code and an error message in JSON format if an error occurs.

const Model = require('../model/model');
// This code imports the 'model' module located in the parent directory's 'model' 
// folder and assigns it to the variable 'Model' for use in the current module.