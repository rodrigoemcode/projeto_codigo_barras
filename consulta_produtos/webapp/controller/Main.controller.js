sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/m/library",
	"sap/ui/model/json/JSONModel",
	"jquery.sap.global"
], function (Controller, MessageToast, library, JSONModel, jQuery) {
	"use strict";

	let urlObject = library.URLHelper;

	return Controller.extend("consultaprodutos.controller.Main", {

		onInit: function () { //onInit equivale a INITIALIZATION no ABAP
			let produto = {};
			let productModel = new JSONModel(produto);
			let view = this.getView();
			view.setModel(productModel, "ModeloProduto");
			//this no javascript = ME - > no ABAP
		},

		OnClickImage: function (oEvent) {
			urlObject.redirect(oEvent.getSource().getSrc(), true );
		},

		onPressBuscar: function () {
			let input;
			input = this.byId("inpBuscar");
			let valor = input.getValue();
			//alert(valor);

			let parameters = {
				url : "https://world.openfoodfacts.org/api/v2/product/" + valor,
				method : "GET",
				async : true,
				crossDomain : true
			};
			//promise = quando uma função retorna como parametro de exportação
			//outra função

			jQuery.ajax(parameters).done(function(response){

				let oProdutoModel = this.getView().getModel("ModeloProduto");
				//clear
				oProdutoModel.setData({});
				oProdutoModel.refresh();
				oProdutoModel.setData(response);
				oProdutoModel.refresh();
			}.bind(this)) // sucesso
			.fail(function(){
				
			}); //excpetion

		}
	});
});
