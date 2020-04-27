/* ViewController.js */

// import dependent classes

import DataController from "./DataController.js";
import GenerateButton from "./GenerateButton.js";


export default class ViewController {

    //properties
    _formData = {}
    _formElement = {}

    constructor(formElement) {

        ViewController._formElement = formElement;

    }

    //methods 
    static getFormData() {

        // get the data from the form
        // var formData = new FormData(form)
        ViewController._formData = new FormData(ViewController._formElement);

        console.log(ViewController._formData);

        // Display the values
        // place the values in an arguments array to pass through to the DataController
        for (var value of ViewController._formData.values()) {
            console.log(value);
        }

    };
}