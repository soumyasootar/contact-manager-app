const express = require('express');
const { getAllContacts, updateContact, getSingleContacts, deleteContact, createContact } = require('../controllers/contactController');

//create a instance of router
const contactRoute = express.Router()

/**Get all Contacts */
contactRoute.get("/", getAllContacts)

/**Create Contact */
contactRoute.post("/", createContact)

/**Update Contact */
contactRoute.put("/:id",updateContact )

/**Get Single Contact */
contactRoute.get("/:id",getSingleContacts )

/**Delete Contact */
contactRoute.delete("/:id",deleteContact )

module.exports = contactRoute