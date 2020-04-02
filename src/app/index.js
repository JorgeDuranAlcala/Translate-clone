import { EventHandler } from "./handleEvents";
import "./index.css";
import { UI } from "./UI";

const ui = new UI();
const eventHandler = new EventHandler();

function main() {
    eventHandler.sendFormData()
}

main()