const asyncHandler = require('express-async-handler') //asyncHandler replaces try-catch block and passes error to error handler

//@desc Get all contacts @route GET /api/contacts @acces to API public
const getContacts = asyncHandler(async (req,res) =>{
    res.status(200).json({ message:'Get all contact information' })
})

//@desc Get specific contacts @route GET /api/contacts/:id /@acces to API public
const getOneContact = asyncHandler(async (req,res) =>{
    res.status(200).json({ message:`Get contact information for ${req.params.id}` })
})

//@desc Create new contacts @route POST /api/contacts @acces to API public
const createContact = asyncHandler(async (req,res) =>{
    console.log('the request body is:', req.body)
    const { name, email, phone } = req.body
    if (!name || !email || !phone){
        res.status(400)
        throw new Error('All fields are mandatory')
    }
    res.status(201).json({ message:'Create contact information' }) //201 means resource created
})

//@desc Update new contacts @route PUT /api/contacts/:id @acces to API public
const updateContact = asyncHandler(async (req,res) =>{
    res.status(200).json({ message:`Update contact information for ${req.params.id}` })
})

//@desc delete new contacts @route POST /api/contacts/:id @acces to API public
const deleteContact = asyncHandler(async (req,res) =>{
    res.status(201).json({ message:'Delete contact information' }) //201 means resource created
})

module.exports = { 
    getContacts, 
    getOneContact, 
    createContact, 
    updateContact, 
    deleteContact 
}