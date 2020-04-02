const translate = require("@vitalets/google-translate-api")

function translateText(text) {
   const textTranslated = translate(text, { to: 'ko' })
    .then(res => res)
    .catch(error => console.log(error))

    return textTranslated;
}


module.exports = translateText