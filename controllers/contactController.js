const { default: axios } = require("axios");
const dotenv = require("dotenv").config();

const addContact = async (req, res) => {
    const url = `https://rest.gohighlevel.com/v1/contacts/`;
    const config = {
        headers: {"Authorization": `Bearer ${process.env.API_KEY}`}
    }

    const { email, phone, firstName, lastName, promptId } = req.body;
    const body = {
        email,
        phone,
        firstName,
        lastName,
        "tags": [`${promptId}`]
    };

    console.log(body);

    try {
        await axios.post(url, body, config);

        res.status(201).send("contact created successfully.");
    } catch(error) {
        res.status(500).send("couldn't complete contact creation.");
    }
    
};

module.exports = {addContact};