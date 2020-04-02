const express = require('express');
const router = express.Router();
const tranlateText = require("./translator")

router.post('/', async (req, res) => {

    const { text } = req.body;

    console.log(text)

    const data = await tranlateText(text);

    res.send({message: 'translated', textTranslated: data})
})

module.exports = router;