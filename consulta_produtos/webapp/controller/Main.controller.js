sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("consultaprodutos.controller.Main", {

		onInit: function () {
		},

		onPressBuscar: function () {
			var input = this.byId("inpBusca");
			var codigoBarras = input.getValue();

			// Cria uma instância do modelo
			var oModel = new sap.ui.model.json.JSONModel();

			// Define a URL do serviço
			var sUrl = "/produto/busca_produto.php?code=" + codigoBarras;

			// Define a propriedade 'model' da View para o modelo criado
			this.getView().setModel(oModel);

			// Define a propriedade 'source' do ObjectHeader para o modelo criado
			var oObjectHeader = this.byId("objHeader");
			oObjectHeader.setModel(oModel);

			// Faz a requisição para o serviço
			jQuery.ajax({
				type: "GET",
				contentType: "application/json",
				url: sUrl,
				dataType: "json",
				async: false,
				success: function (data, textStatus, jqXHR) {
					oModel.setData(data);
				},
				error: function (jqXHR, textStatus, errorThrown) {
					MessageToast.show("Erro na requisição");
				}
			});
		}
	});
});
