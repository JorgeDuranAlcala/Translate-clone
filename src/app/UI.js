export class UI {
    constructor() {
        this.form = document.getElementById('form');
        this.input = document.getElementById("txtArea");
        this.txtTranslated = document.getElementById("txtTrans");
        this.select = document.querySelectorAll('select');
        this.alert = document.querySelector('.alert-info')
    }

    render(txt) {
        this.txtTranslated.textContent = txt;
    }

    showLoading() {
        console.log("cargando")
        this.alert.classList.remove('d-none')
    }
    
    dissapearLoading() {
        console.log("termino de cargar")
        this.alert.classList.add('d-none')
    }

}