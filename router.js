const express = require('express');
const router = express.Router();
const tranlateText = require("./translator")

router.post('/', async (req, res) => {

    const { text, to, from } = req.body;

    try {
        const data = await tranlateText(text, to, from);
        res.send({message: 'translated', textTranslated: data})
    } catch (error) {
        console.log(error)
    }
    
})

module.exports = router;