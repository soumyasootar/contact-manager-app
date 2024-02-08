const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@DEC Get all contacts
//@GET /api/contacts
//@access PUBLIC

const getAllContacts = asyncHandler(async (req, res) => {
  // finding all Contacts
  const AllContacts = await Contact.find();
  res.status(200).json(AllContacts);
});

//@DEC Create Contacts
//@POST /api/contacts
//@access PUBLIC

const createContact = asyncHandler(async (req, res) => {
  const newdata = req.body;

  const { name, email, phone } = newdata;
  console.log("newdata: ", newdata);

  //We dont have to write all these as mongoose will not allow
  // if (!name) {
  //   res.status(400);
  //   throw new Error("Name Field is Mandatory");
  // }
  // if (!email) {
  //   res.status(400);
  //   throw new Error("Email Field is Mandatory");
  // }
  // if (!phone) {
  //   res.status(400);
  //   throw new Error("Phone Field is Mandatory");
  // }

  const postContact = await Contact.create(newdata);
  res.status(201).json({ message: "Contact Created", data: postContact });
});

//@DEC Update contact
//@PUT /api/contacts/:id
//@access PUBLIC

const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById({ _id: req.params.id });

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(201).json({
    message: `Contact Updated for ${req.params.id}`,
    data: updatedContact,
  });
});

//@DEC Get Single contacts
//@GET /api/contacts/:id
//@access PUBLIC

const getSingleContacts = asyncHandler(async (req, res) => {
  // const contact = await Contact.findOne({ _id: req.params.id });
  const contact = await Contact.findById({ _id: req.params.id });

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res
    .status(200)
    .json({ message: `Get Contact for ${req.params.id}`, data: contact });
});

//@DEC Delete contact
//@DELETE /api/contacts/:id
//@access PUBLIC

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findOneAndDelete({ _id: req.params.id });

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  res.status(200).json({ message: `Delete Contact for ${req.params.id}` });
});

module.exports = {
  getAllContacts,
  deleteContact,
  getSingleContacts,
  updateContact,
  createContact,
};
