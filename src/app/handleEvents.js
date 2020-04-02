import { Traductor } from "./traductor";
import { UI } from "./UI";
const translator = new Traductor();
const ui = new UI

export class EventHandler {

    sendFormData() {
        ui.form.addEventListener('submit', e => {
            e.preventDefault();
            const txt = ui.input.value;
            translator.translateText(txt)
        })
    }
}