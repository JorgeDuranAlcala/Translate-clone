import { UI } from "./UI";
const ui = new UI()

export class Traductor {
    constructor() {
        this.url = 'http://localhost:4000/';
    }

    async translateText(text, to, from) {
        let loading = true;
        ui.showLoading();
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
            ui.dissapearLoading();
            ui.render(text)
        })
        .catch(error => console.log(error))
    }
} 