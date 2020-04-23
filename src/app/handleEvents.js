import { Traductor } from "./traductor";
import { UI } from "./UI";
import { langs } from "./languages_list";
const translator = new Traductor();
const ui = new UI

export class EventHandler {

    sendFormData() {
        ui.form.addEventListener('submit', e => {
            e.preventDefault();
            const txt = ui.input.value;
           translator.translateText(
               txt, 
               ui.select[1].value, 
               ui.select[0].value
               )
        })
    }

    
    renderLanguagesList() {
        for (const value in langs) {
            if (langs.hasOwnProperty(value)) {
                ui.select.forEach(element => {
                    const option = document.createElement('option');
                    option.value = value;
                    option.innerText = langs[value]
                    element.appendChild(option);
                })
           }
       }
    }

}