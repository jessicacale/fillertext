/* GenerateButton.js */

import ViewController from "./ViewController.js";

export default class GenerateButton {

    static _buttonElement

    constructor(buttonElement) {

        GenerateButton._buttonElement = buttonElement;

        GenerateButton._buttonElement.addEventListener("click", GenerateButton.clickEventHandler)

    }

    static clickEventHandler(event) {

        console.log("Generate Button Clicked");

        ViewController.getFormData();

    }


}