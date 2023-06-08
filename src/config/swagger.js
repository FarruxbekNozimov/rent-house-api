const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
	swaggerDefinition: {
		openapi: "3.0.0",
		info: {
			title: "API Documentation",
			version: "1.0.0",
			description: "Documentation for your API",
		},
	},
	apis: ["routes/*.js"], // Modify this to match the path of your route files
};

const specs = swaggerJsDoc(options);

module.exports = (app) => {
	app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(specs));
};
