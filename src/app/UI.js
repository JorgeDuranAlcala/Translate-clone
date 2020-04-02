export class UI {
    constructor() {
        this.form = document.getElementById('form');
        this.input = document.getElementById("txtArea");
        this.txtTranslated = document.getElementById("txtTrans")
    }

    render(txt) {
        this.txtTranslated.textContent = txt;
    }
}