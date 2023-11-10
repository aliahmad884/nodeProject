// const { GetItem, Add, Delete, GetAllItems, Update } = require("../Controlers/C.Items.controller");
const ItemController = require('../Controlers/Categories.controller');
const express = require("express");
const CategoriesRouter = express.Router();

const item = new ItemController();

CategoriesRouter.get("/", item.GetCategories);
CategoriesRouter.post("/", item.Add);
CategoriesRouter.delete("/", item.Delete);
CategoriesRouter.put("/", item.Update);
// CategoriesRouter.get("/:id", item.GetCategory);

// CategoriesRouter.get("/", GetAllItems);
// CategoriesRouter.post("/", Add)
// CategoriesRouter.delete("/:id", Delete)
// CategoriesRouter.get("/:id", GetItem)
// CategoriesRouter.put("/:id", Update)

module.exports = CategoriesRouter;