// REQUIRED PACKAGES
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express"),
	swaggerDocument = require("./config/swagger.json");

// REQUIRE ROUTES
const authRouter = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
	connectDB();
	console.log(`Server on port ${PORT}`);
});
