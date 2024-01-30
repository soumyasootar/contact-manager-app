const express = require('express');

//create a instance of router
const contactRoute = express.Router()

/**Get all Contacts */
contactRoute.get("/", (req, res) => {
    res.status(200).json({ "message": "Get all Contacts" })
})

/**Create Contact */
contactRoute.post("/", (req, res) => {
    res.status(200).json({ "message": "Contact Created" })
})

/**Update Contact */
contactRoute.put("/:id", (req, res) => {
    res.status(200).json({ "message": `Update Contact for ${req.params.id}` })
})

/**Get Single Contact */
contactRoute.get("/:id", (req, res) => {
    res.status(200).json({ "message": `Get Contact for ${req.params.id}` })
})
/**Delete Contact */
contactRoute.delete("/:id", (req, res) => {
    res.status(200).json({ "message": `Delete Contact for ${req.params.id}` })
})

module.exports = contactRoute