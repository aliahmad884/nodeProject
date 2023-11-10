// const { GetItem, Add, Delete, GetAllItems, Update } = require("../Controlers/C.Items.controller");
const ItemController = require('../Controlers/Appliances.controller');
const express = require("express");
const AppliancesRouter = express.Router();

const item = new ItemController();

AppliancesRouter.get("/", item.GetCategories);
AppliancesRouter.post("/", item.Add);
AppliancesRouter.delete("/", item.Delete);
AppliancesRouter.put("/", item.Update);
// AppliancesRouter.get("/:id", item.GetCategory);

// AppliancesRouter.get("/", GetAllItems);
// AppliancesRouter.post("/", Add)
// AppliancesRouter.delete("/:id", Delete)
// AppliancesRouter.get("/:id", GetItem)
// AppliancesRouter.put("/:id", Update)

module.exports = AppliancesRouter;