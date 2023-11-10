const { MongoClient } = require("mongodb");
const CategoryClass = require("../Handler/CategoreisListHandler");



class DataHandler {
    constructor() {
        this.dbClient = new MongoClient(process.env.DB_Con_Str);
        this.database = this.dbClient.db(process.env.DataBase);
    }

    async GetAll() {
        try {
            await this.dbClient.connect();
            const collection = this.database.collection(process.env.CategoryList);
            const cursor = await collection.find();
            const tempArray = [];
            for await (const doc of cursor) {
                let data = new CategoryClass(doc.Image, doc.Name, doc.About, doc._id);
                tempArray.push(data);
            };
            return tempArray;
        }
        catch (ex) {
            throw ex;
        }
        finally {
            this.dbClient.close();
        }
    }


    async AddItem(itemName) {
        try {
            await this.dbClient.connect()
            const collection = this.database.collection(process.env.CategoryList);
            const result = await collection.insertOne(itemName);
            return result;
            // console.log(itemName);
        }
        catch (ex) {
            console.log(ex);
            return null;
        }
        finally {
            this.dbClient.close();
        }
    }

    async DeleteItem(id) {
        try {
            await this.dbClient.connect();
            const collection = this.database.collection(process.env.CategoryList);
            const found = await collection.findOne(id);
            if (found) {
                const result = await collection.deleteOne(found);
                console.log(result);
                return result;
            }
            return null;

        }
        catch (ex) {
            console.log(ex);
            return null;
        }
        finally {
            this.dbClient.close();
        }
    }

    async UpdateItem(id, item) {
        try {
            await this.dbClient.connect();
            const collection = this.database.collection(process.env.CategoryList);
            const result = await collection.updateOne(
                { _id: id },
                { $set: item }
            );
            console.log(result);
            return result;
        }
        catch (ex) {
            throw ex;
        }
        finally {
            this.dbClient.close();
        }
    }

}

module.exports = DataHandler;