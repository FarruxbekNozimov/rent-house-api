// REQUIRED PACKAGES
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const swagger = require("./config/swagger");

// REQUIRE ROUTES
const authRouter = require("./routes/auth");

const app = express();

swagger(app);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/uy/auth", authRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	connectDB();
	console.log(`Server on port ${PORT}`);
});
