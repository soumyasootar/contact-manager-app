const asyncHandler = require('express-async-handler');

//@DEC Get all contacts
//@GET /api/contacts
//@access PUBLIC

const getAllContacts = asyncHandler(async (req, res) => {
  // just for checking errorHandler
  res.status(400);
  throw new Error("hii");
});

//@DEC Create Contacts
//@POST /api/contacts
//@access PUBLIC

const createContact = asyncHandler(async (req, res) => {
  const body = req.body;
  const { name, age, Squad } = body;

  if (!name || !age || !Squad) {
    res.status(400);
    throw new Error("All Fields are Mandatory");
  }
  res.status(400).json({ message: "Contact Created", body });
});

//@DEC Update contact
//@PUT /api/contacts/:id
//@access PUBLIC

const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Contact for ${req.params.id}` });
});

//@DEC Get Single contacts
//@GET /api/contacts/:id
//@access PUBLIC

const getSingleContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get Contact for ${req.params.id}` });
});

//@DEC Delete contact
//@DELETE /api/contacts/:id
//@access PUBLIC

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Contact for ${req.params.id}` });
});

module.exports = {
  getAllContacts,
  deleteContact,
  getSingleContacts,
  updateContact,
  createContact,
};
