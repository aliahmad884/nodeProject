// const { GetItem, Add, Delete, GetAllItems, Update } = require("../Controlers/C.Items.controller");
const ItemController = require('../Controlers/Devices.controller');
const express = require("express");
const DevicesRouter = express.Router();

const item = new ItemController();

DevicesRouter.get("/", item.GetCategories);
DevicesRouter.post("/", item.Add);
DevicesRouter.delete("/", item.Delete);
DevicesRouter.put("/", item.Update);
// DevicesRouter.get("/:id", item.GetCategory);

// DevicesRouter.get("/", GetAllItems);
// DevicesRouter.post("/", Add)
// DevicesRouter.delete("/:id", Delete)
// DevicesRouter.get("/:id", GetItem)
// DevicesRouter.put("/:id", Update)

module.exports = DevicesRouter;