const chalk = require("chalk");
const DotEnv = require("dotenv");
DotEnv.config();
const express = require("express");

const UserRouter = require("./Routes/User.routes");

const CategoriesRouter = require("./Routes/Categories.routes");
const DevicesRouter = require("./Routes/Devices.routes");
const AccessoriesRouter = require("./Routes/Accessories.routes");
const AppliancesRouter = require("./Routes/Appliances.routes");


const port = Number(process.env.Port);
app = express();

app.use(express.json());

const cors = require('cors');


app.use(cors());

app.use("/category", CategoriesRouter)
app.use("/devices", DevicesRouter);
app.use("/accessories", AccessoriesRouter)
app.use("/appliances", AppliancesRouter)
app.use("/user", UserRouter);


app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
