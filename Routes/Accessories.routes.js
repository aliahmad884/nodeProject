// const { GetItem, Add, Delete, GetAllItems, Update } = require("../Controlers/C.Items.controller");
const ItemController = require('../Controlers/Accessories.controller');
const express = require("express");
const AccessoriesRouter = express.Router();

const item = new ItemController();

AccessoriesRouter.get("/", item.GetCategories);
AccessoriesRouter.post("/", item.Add);
AccessoriesRouter.delete("/", item.Delete);
AccessoriesRouter.put("/", item.Update);
// AccessoriesRouter.get("/:id", item.GetCategory);

// AccessoriesRouter.get("/", GetAllItems);
// AccessoriesRouter.post("/", Add)
// AccessoriesRouter.delete("/:id", Delete)
// AccessoriesRouter.get("/:id", GetItem)
// AccessoriesRouter.put("/:id", Update)

module.exports = AccessoriesRouter;