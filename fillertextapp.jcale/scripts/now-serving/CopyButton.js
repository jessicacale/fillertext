/* CopyButton.js */

export default class CopyButton {

    static _buttonElement

    constructor(buttonElement) {

        CopyButton._buttonElement = buttonElement;

        CopyButton._buttonElement.addEventListener("click", CopyButton.clickEventHandler)

    }

    static clickEventHandler(event) {

        console.log("Copy Button Clicked");

    }


}