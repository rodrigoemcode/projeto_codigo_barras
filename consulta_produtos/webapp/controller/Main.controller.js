sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("consultaprodutos.controller.Main", {
            onInit: function () {
                //alert("Meu programa está no ar!!!");
            },
            onPressBuscar: function() {
                let input;
                input = this.byId("inpBusca");
                let valor = input.getValue();
                alert(valor);

                let 
            }
        });
    });
