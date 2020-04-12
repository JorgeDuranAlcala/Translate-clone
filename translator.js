const translate = require("@vitalets/google-translate-api")

function translateText(text, to, from) {
   const textTranslated = translate(text, { from, to })
    .then(res => res)
    .catch(error => console.log(error))

    return textTranslated;
}


module.exports = translateText