//@desc Get all contacts
//@route GET /api/contacts
//@acces to API public
const getContact = (req,res) =>{
    res.status(200).json({ message:'Get contact information' })
}

//@desc Create new contacts
//@route POST /api/contacts
//@acces to API public
const createContact = (req,res) =>{
    res.status(201).json({ message:'Create contact information' }) //201 means resource created
}

module.exports = { getContact, createContact }