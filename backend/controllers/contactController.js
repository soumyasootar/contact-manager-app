//@DEC Get all contacts
//@GET /api/contacts
//@access PUBLIC

const getAllContacts = (req, res) => {
    res.status(200).json({ message: "Get all Contacts" });
};

//@DEC Create Contacts
//@POST /api/contacts
//@access PUBLIC

const createContact = (req, res) => {
    res.status(201).json({ message: "Contact Created" });
};

//@DEC Update contact
//@PUT /api/contacts/:id
//@access PUBLIC

const updateContact = (req, res) => {
    res.status(200).json({ "message": `Update Contact for ${req.params.id}` })
}

//@DEC Get Single contacts
//@GET /api/contacts/:id
//@access PUBLIC

const getSingleContacts = (req, res) => {
    res.status(200).json({ "message": `Get Contact for ${req.params.id}` })
}

//@DEC Delete contact
//@DELETE /api/contacts/:id
//@access PUBLIC

const deleteContact = (req, res) => {
    res.status(200).json({ "message": `Delete Contact for ${req.params.id}` })
}

module.exports = {getAllContacts,deleteContact,getSingleContacts,updateContact,createContact}
