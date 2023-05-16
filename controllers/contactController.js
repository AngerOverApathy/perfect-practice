//@desc Get all contacts @route GET /api/contacts @acces to API public
const getContacts = (req,res) =>{
    res.status(200).json({ message:'Get all contact information' })
}

//@desc Get specific contacts @route GET /api/contacts/:id /@acces to API public
const getOneContact = (req,res) =>{
    res.status(200).json({ message:`Get contact information for ${req.params.id}` })
}

//@desc Create new contacts @route POST /api/contacts @acces to API public
const createContact = (req,res) =>{
    res.status(201).json({ message:'Create contact information' }) //201 means resource created
}

//@desc Update new contacts @route PUT /api/contacts/:id @acces to API public
const updateContact = (req,res) =>{
    res.status(200).json({ message:`Update contact information for ${req.params.id}` })
}

//@desc delete new contacts @route POST /api/contacts/:id @acces to API public
const deleteContact = (req,res) =>{
    res.status(201).json({ message:'Delete contact information' }) //201 means resource created
}

module.exports = { 
    getContacts, 
    getOneContact, 
    createContact, 
    updateContact, 
    deleteContact 
}