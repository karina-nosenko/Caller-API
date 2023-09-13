const { urlencoded } = require("body-parser");
const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const contactsRouter = require("./routers/contactRouter");
const app = express();

app.use(express.json());
app.use(urlencoded({ extended: false }));

app.use("/api/v1/contacts", contactsRouter);

app.listen(port, () => console.log(`server started on port ${port}`));