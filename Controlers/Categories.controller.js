const { ObjectId } = require("mongodb");
const DataHandler = require("../DataBase/CategoriesDB");
const e = require("express");
const CategoryClass = require("../Handler/CategoreisListHandler");
// const { CategoryClass } = require('../Handler/CategoreisHandler')
const handler = new DataHandler();


class ItemController {
    constructor() {
    }

    async GetCategories(req, res) {
        try {
            let itemList = await handler.GetAll();
            return res.status(200).json(itemList);
        }
        catch (ex) {
            console.log(ex);
            res.status(500).send("internal server error");
        }
    }

    async Add(req, res) {
        try {
            const add = new CategoryClass(req.body.Image, req.body.Name, req.body.About);
            // const add = req.body;
            handler.AddItem(add);
            res.status(200).send(add);
            console.log(add);
        }
        catch (ex) {
            console.log(ex);
        }

    };

    async Delete(req, res) {
        try {
            const id = new ObjectId(req.body.id);
            console.log(id);
            handler.DeleteItem(id);
            res.status(200).send(id);
        }
        catch (ex) {
            console.log(ex);
        }
    }

    async Update(req, res) {
        try {
            const id = new ObjectId(req.body.id)
            const current = new CategoryClass(req.body.Image, req.body.Name, req.body.About);
            console.log(id, current);
            const update = await handler.UpdateItem(id, current);
            return res.status(201).send(update);
        }
        catch (ex) {
            console.log(ex);
        }
    }

    // async GetCategory(req, res) {
    //     try {
    //         const id = new ObjectId(req.params.id);
    //         const found = await handler.GetById(id);
    //         if (found) {
    //             return res.status(200).json(found);
    //         }
    //         return res.status(404).json("not found");
    //     }
    //     catch (ex) {
    //         console.log(ex);
    //         res.status(500).send("internal server error");
    //     }
    // }

}


module.exports = ItemController;
