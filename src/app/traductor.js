import { UI } from "./UI";
const ui = new UI()

export class Traductor {
    constructor() {
        this.url = 'http://localhost:4000/';
    }

    async translateText(text, to, from) {
        await fetch(this.url, {
            method: "POST",
            body: JSON.stringify({
                text,
                to,
                from
            }),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        .then(res => res.json())
        .then(res => {
            const { text } = res.textTranslated;
            ui.render(text)
            console.log(res)
        })
        .catch(error => console.log(error))
    }
} 