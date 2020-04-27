/* NowServing.js */

// import dependent classes
import CopyButton from "./CopyButton.js";
import ServingPanel from "./ServingPanel.js";
import GenerateButton from "./GenerateButton.js";
import ViewController from "./ViewController.js";

// class definition
export default class NowServing {

    // properties

    _copyButton = {}
    _servingPanel = {}
    _generateButton = {}
    _viewController = {}

    constructor() {

        // build the app

        let copyButtonElement = document.querySelector("#copybutton");

        NowServing._copyButton = new CopyButton(copyButtonElement);

        let servingPanelElement = document.querySelector("#generatedtext");

        NowServing._servingPanel = new ServingPanel(servingPanelElement);

        let generateButtonElement = document.querySelector("#generatebutton");

        NowServing._generateButton = new GenerateButton(generateButtonElement);

        let viewControllerFormElement = document.querySelector("#type-length-form");

        NowServing._viewController = new ViewController(viewControllerFormElement);



    }



    // methods

}